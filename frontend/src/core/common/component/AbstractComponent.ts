import { OnInit, AfterViewInit } from '@angular/core';

/**
 *  <AbstractComponent>
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付        更新者        内容
 */
export abstract class  AbstractComponent<PropsType> implements OnInit, AfterViewInit  {
  protected props:PropsType;

  constructor(props?: PropsType) {
    if (!props) {
      let _props:any = {};
      this.props = _props;
    }
  }
  /** Override */
  ngOnInit() {
    this.componentWillUnmount();
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

