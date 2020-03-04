import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { AbstractService } from '../../../core/common/service/AbstractService';

/**
 * Tenant dialogのServiceクラス
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付        更新者        内容
 *  1 2018/06/21 T.Utsunomiya   新規作成
 */
@Injectable()
export class AppLeftSideService extends AbstractService {
  constructor(private  httpClient:  HttpClient) {
    super();
  }

  get() {
  }
}
