import * as fs from 'fs-extra'; 
import * as path  from 'path'; 


export class RootDirUtil {
  constructor() { }

  public static getRootDir() {
    let rootPath;
    let cnt = 0;
    let dir = __dirname;
    while(cnt < 10) {
      let parent = path.join(dir, '../');
      dir = parent;
      let files = fs.readdirSync(parent);
      files = files.filter(e => e == 'package.json' || e ==  'node_modules');
      if (files.length == 2) {
        cnt =20;
        rootPath = `${path.join(parent, '../')}`;
      }
      cnt++;
    }
    return rootPath;
  }
}