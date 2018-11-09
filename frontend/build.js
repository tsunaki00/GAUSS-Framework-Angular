const fs = require('fs');
const path = require('path');
const readline = require('readline');
const modulePath = '/src/app';
const corePath = '/app/src/core';
const appModule = "modules/AppModule.ts";
const appComponent = "AppComponent.ts";
const routingModule = "AppRoutingModule.ts";

(async () => {
  let modules = [];
  let listFile = async (dirname) => {
    let filenames = fs.readdirSync(dirname, 'utf8');    
    filenames = filenames.filter((f) => f.indexOf('.') != 0 && f != 'node_modules');
    for (let filename of filenames) {
      let filepath = `${dirname}/${filename}`;
      if (fs.statSync(filepath).isDirectory()) {
        modules.concat(await listFile(filepath));
      } else {
        if (filename.indexOf('Abstract') == -1 && (
            filename.indexOf('RoutingModule.ts') > -1 || 
            filename.indexOf('Component.ts') > -1 || 
            filename.indexOf('Service.ts') > -1)) {
          if (path.basename(filename) == appComponent) {
            filepath = '..' + filepath.replace(corePath , '');
          } else {
            filepath = '../..' + filepath.replace(modulePath, '');
          }
          let type = 'service';
          if (filename.indexOf('RoutingModule.ts') > -1) {
            type = 'routing'
          } else if(filename.indexOf('DialogComponent.ts') > -1 ) {
            type = 'dialog'
          } else if(filename.indexOf('Component.ts') > -1 ) {
            type = 'component'
          }
          modules.push({
            "type": type, 
            "dir" : filepath.replace('/' + path.basename(filename), ''), 
            "fileName" : path.basename(filename),
            "className" : path.basename(filename).replace('.ts', '')} );
        }
      }
    }
    modules.concat(modules);
  }
  await listFile(__dirname);
  let isWrite = true;
  let lines = [];
  let rs = fs.createReadStream(corePath + "/" + appModule);
  let rl = readline.createInterface(rs, {});  
  rl.on('line', (line) => {
    if (line.indexOf("routing") > -1 ||
        line.indexOf("declaration") > - 1 ||
        line.indexOf("service") > -1) {
      let type = 'service'
      if (line.indexOf("routing") > -1) {
        type = 'routing';
      } else if (line.indexOf("declaration") > - 1) {
        type = 'component';
      }
      let space = "";
      for (var i = 0; i < line.indexOf('/*'); i++) {
        space = space + " ";
      }
      if (line.indexOf("start") > -1) {
        lines.push(line);
        isWrite = false;
        if (line.indexOf("import") > -1) {
          for (var i = 0; i < modules.length; i++) {
            let model = modules[i];
            if (model['type'] == type) {
              if (model["fileName"] != routingModule) {
                lines.push(space + "import {" + model['className'] + "} from '" 
                                    + model["dir"] + '/' + model["fileName"].replace('.ts', '') + "';");
              }
            }
          }
        } else {
          let split = "";
          for (var i = 0; i < modules.length; i++) {
            let model = modules[i];
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
    fs.writeFile(corePath + "/" + appModule, lines.join('\n'));
    //createRoutingModule();
  });
})();