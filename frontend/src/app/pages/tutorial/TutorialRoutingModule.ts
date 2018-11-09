import { RouterModule, Routes } from '@angular/router';
import {FrontendComponent} from './frontend/FrontendComponent';

/**
 * ルーティング処理クラス
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付        更新者        内容
 *  1 2018/06/21 T.Utsunomiya   新規作成
 */
const routes: Routes = [
  {path: 'tutorial',
    children: [
      { path : '', component : FrontendComponent },
      { path : 'frontend', component : FrontendComponent }
    ]
  }
];

export const TutorialRoutingModule = RouterModule.forChild(routes);