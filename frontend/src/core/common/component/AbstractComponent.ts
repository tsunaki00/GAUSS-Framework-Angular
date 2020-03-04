import { OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

/**
 *  <AbstractComponent>
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付        更新者        内容
 */
export abstract class  AbstractComponent implements OnInit, AfterViewInit  {
  public loading = true;
  protected invalid = false;
  
  constructor() {
  }
  /** Override */
  ngOnInit() {
    $('body').css('width', "100%");

    this.componentWillMount();
    this.render();
  }
  /** Override */
  ngAfterViewInit() {
    this.componentDidMount();
  }
  /** Override */
  ngDestroy() {
    this.componentWillUnmount();
  }
  
    /**
   * 描画前に実行される
   */
  protected componentWillMount() {}

  /**
   * 描画前に実行される
   */
  protected componentWillUnmount() {}

  /**
   * 描画処理などを書く
   */
  protected render() {}

  /**
   * 描画処理が完了したら実行される
   */
  protected componentDidMount() {}


}

