import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Environment, configure } from 'nunjucks';

/**
 * RDBサービス抽象クラス
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2019/06/10  新規作成
 *
 */
@Injectable()
export abstract class AbstractRDBService {

  protected readonly connection: Connection;
  protected readonly template: Environment;

  constructor() {
    this.template = configure('resources/sql', {
      autoescape: false,
      trimBlocks: true,
    });
  }

  /**
   * RAW SQLの実行
   * @param query
   * @param parameters
   */
  public async execQuery(path: string, parameters?: object): Promise<any> {
    const query = this.template.render(path, parameters);
    return this.connection.query(query);
  }

}
