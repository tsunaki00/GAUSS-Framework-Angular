import { DynamicModule } from '@nestjs/common';
import { sync } from 'glob';
import * as path from 'path';

/**
 * 動的モジュールローダー
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2018/08/13  新規作成
 *
 */
export class DynamicModuleLoader {
  static forRoot(params = []): DynamicModule {
    const imports = params.map((name) => {
      return sync(path.resolve(name));
    }).reduce((acc, val) => acc.concat(val), [])
      .filter((x, i, self) => self.indexOf(x) === i);
    const modules = (imports || []).map(async (file) => {
      // tslint:disable-next-line:whitespace
      const m = await import(file);
      return m[path.basename(file, '.ts')];
    });
    return {
      module: DynamicModuleLoader,
      imports: modules,
    };
  }
}
