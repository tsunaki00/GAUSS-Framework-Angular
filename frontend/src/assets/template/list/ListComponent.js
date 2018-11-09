import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from 'src/core/common/component/AbstractComponent';
import { ListService } from './ListService'

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
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
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
  ngOnInit() {
    this.service.get().subscribe((res : any[]) => {
      this.todos = res;
    });
  } 
}
