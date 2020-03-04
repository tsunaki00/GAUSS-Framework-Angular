import { Res, HttpStatus, Options } from '@nestjs/common';
import * as config from 'config';
//import * as IORedis from 'ioredis';

/**
 * RESTコントローラ抽象クラス
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2019/06/10  新規作成
 *
 */
export abstract class AbstractRestController {
//  protected readonly redis: IORedis.Redis;

  constructor() {
//    this.redis = new IORedis(config.redis.server);
  }

  /**
   * フリフライトリクエストは常に正常レスポンスを返す
   */
  @Options('*')
  public async options(@Res() res) {
    res.status(HttpStatus.OK).send();
  }

  /**
   * キャッシュ取得
   * @param param
   */
  protected async getCache(methodName: string, param: object) {
    // const key = await PasswordUtil.encrypt(JSON.stringify(param));
    // const ret = await this.redis.get(`${methodName}/${key}`);
    // if (ret) {
    //   return JSON.parse(ret);
    // }
    return null;
  }

  /**
   * キャッシュ作成
   * @param param
   * @param data
   * @param ttl
   */
  protected async setCache(methodName: string, param: object, data: object, ttl?: number) {
    // const key = await PasswordUtil.encrypt(JSON.stringify(param));
    // await this.redis.set(`${methodName}/${key}`, JSON.stringify(data), 'EX', ttl || config.redis.ttl);
  }

}
