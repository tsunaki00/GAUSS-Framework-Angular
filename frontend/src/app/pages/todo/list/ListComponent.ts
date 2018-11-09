import { Component, OnInit } from '@angular/core';
import { ListService } from './ListService'
import { AbstractComponent } from 'src/core/common/component/AbstractComponent';

/**
 * ToDoListのComponentクラス
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付        更新者        内容
 *  1 2018/07/1 T.Utsunomiya   新規作成
 */
@Component({
  selector: 'list',
  templateUrl: './List.html',
  styleUrls: ['./List.scss']
})
export class ListComponent extends AbstractComponent<any> {
  message = "";
  todos = [];
  // DI するインスタンスをコンストラクタの引数に書きます
  constructor(
      private service: ListService
  ) { 
    super();
  }

  /**
   * 初期処理
   */
  public componentWillUnmount() {
    this.service.get().subscribe((res : any[]) => {
      this.todos = res;
    });
  }

  ////// 追加 ここから //////
  /**
   * Add itemのクリックしたときに動くイベント
   */
  public entry() {
    // entry画面に遷移します
    if (this.message) {
      this.service.create(this.message).subscribe((res) => {
        this.todos.push(res);
        this.message = "";
        console.log('create');
      });
    }
  }
  ////// 追加 ここまで //////
}
