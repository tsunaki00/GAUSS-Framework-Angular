import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from 'src/core/common/service/AbstractService';

/**
 * Serviceクラス
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付        更新者        内容
 *  1 2018/06/21 T.Utsunomiya   新規作成
 */
@Injectable()
export class ListService extends AbstractService {
  API_URL = '/rest/todo';
  constructor(private  httpClient:  HttpClient) {}

  // APIから情報を取得します
  get() {
    return this.httpClient.get(this.API_URL);
  }
}