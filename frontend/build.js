const fs = require('fs');
const path = require('path');
const readline = require('readline');
const modulePath = '/src';
const corePath = '/src/core';
const appModule = "modules/AppModule.ts";
const appComponent = "AppComponent.ts";
const routingModule = "AppRoutingModule.ts";

let collections = [];
let listFile = async (dirName) => {
  let fileNames = fs.readdirSync(dirName, 'utf8');
  for (var i = 0; i < fileNames.length; i++) {
    if (fileNames[i] != 'node_modules' && fileNames[i].indexOf('.') != 0 && fileNames[i].indexOf('Abstract') == -1) {
      let fileName = path.join(dirName, fileNames[i]);
      if (fs.statSync(fileName).isDirectory()) {
        await listFile(fileName);
      } else {
        let fileName = fileNames[i];
        if (fileName.indexOf('RoutingModule.ts') > -1 ||
            fileName.indexOf('Component.ts') > -1 || 
            fileName.indexOf('Service.ts') > -1) {
          let _dir = dirName.slice(__dirname.length);
          if (_dir.indexOf('/server') > -1) {
            continue;

          }
          if (fileName == appComponent) {
            _dir = '..' + _dir.replace(corePath , '');
          } else {
            let __path = _dir.replace(modulePath, '');
            _dir = '../..' + _dir.replace(modulePath, '');
          }
          let className = '';
          let upCase = true;
          for (var j = 0; j < fileName.replace('.ts', '').length; j++) {
            let char = fileName.slice(j, j+1);
            if (upCase) {
              char = char.toUpperCase();
              upCase = false;
            }
            upCase = (char == '-' || char == '.');
            if (!upCase) {
              className = className + char;
            }
          }
          if (fileName.indexOf('RoutingModule.ts') > -1) {
            collections.push({"type": "routing", "dir" : _dir,  "fileName" : fileName, "className" : className} );
          } else if (fileName.indexOf('Component.ts') > -1) {

            collections.push({"type": "component", "dir" : _dir,  "fileName" : fileName, "className" : className} );
            if (fileName.indexOf('DialogComponent.ts') > -1) {
              collections.push({"type": "dialog", "dir" : _dir,  "fileName" : fileName, "className" : className} );
            }
          } else {
            if (_dir.indexOf('../../core' ) > -1) {
              _dir = _dir.replace('../../src/core', '..');
              collections.push({"type": "service", "dir" : _dir, "fileName" : fileName, "className" : className} );
            } else {
              collections.push({"type": "service", "dir" : _dir, "fileName" : fileName, "className" : className} );
            }
          }
        }
      }
    }
  }
}
// 
let createAppModule = async () => {
  await listFile(__dirname, 'utf8');
  let isWrite = true;
  let lines = [];
  let rs = fs.createReadStream(__dirname + corePath + "/" + appModule);
  let rl = readline.createInterface(rs, {});  
  rl.on('line', (line) => {
    if (line.indexOf("routing") > -1 ||
        line.indexOf("declarations") > - 1 ||
        line.indexOf("service") > -1 ||
        line.indexOf("dialog") > -1) {
      let type = 'service'
      if (line.indexOf("routing") > -1) {
        type = 'routing';
      } else if (line.indexOf("declarations") > - 1) {
        type = 'component';
      } else if (line.indexOf("dialog") > - 1) {
        type = 'dialog';
      }


      let space = "";
      for (var i = 0; i < line.indexOf('/*'); i++) {
        space = space + " ";
      }

      if (line.indexOf("start") > -1) {
        lines.push(line);
        isWrite = false;
        if (line.indexOf("import") > -1) {
          for (let model of collections) {
            if (model['type'] == type) {
              if (model["fileName"] != routingModule) {

                lines.push(space + "import {" + model['className'] + "} from '" 
                                    + model["dir"] + '/' + model["fileName"].replace('.ts', '') + "';");
              }
            }
          }
        } else {
          let split = "";
          for (let model of collections) {
            if (model['type'] == type) {
              if (model["fileName"] != routingModule) {
                lines.push(space + split + model['className']);
                split = ",";
              }
            }
          }
        }
      } else if(line.indexOf("end") > -1) {
        isWrite = true;
      }
    }
    if (isWrite) {
      lines.push(line);
    }
  });
  rl.on('close', (line) => { 
    fs.writeFileSync(__dirname + corePath + "/" + appModule, lines.join('\n'));
    //createRoutingModule();
  });

}
(async () => {  
  await createAppModule();
//  console.log(collections);
})();

