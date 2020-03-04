import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import { MainLayoutComponent } from 'src/core/layouts/main/MainLayoutComponent';

/**
 * ToDoのルーティング処理クラス
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付        更新者        内容
 *  1 2018/06/21 T.Utsunomiya   新規作成
 */
const routes: Routes = [
  {path: 'todo',
    component: MainLayoutComponent,
    children: [
      { path : '', component : ListComponent }
    ]
  }
];

export const TodoRoutingModule = RouterModule.forChild(routes);