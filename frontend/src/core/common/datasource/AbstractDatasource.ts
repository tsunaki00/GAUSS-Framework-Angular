import { DataSource } from "@angular/cdk/table";
import { Observable, BehaviorSubject } from "rxjs";
import { CollectionViewer } from "@angular/cdk/collections";

export abstract class AbstractDataSource<MODEL> implements DataSource<MODEL> {
  /** ユーザ情報 */
  protected behaviorSubject;

  /** 全レコード数 */
  public totalElements: number;

  constructor() { }

  connect(collectionViewer: CollectionViewer): Observable<MODEL[]> {
    return this.behaviorSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.behaviorSubject.complete();
  }

  /**
   * @param page 取得するページ番号（0-based）
   * @param size 1ページの件数
   */
  abstract loadMore(page: number, size: number): void; 
  // {
  //   this.userService.getUsers(page, size)
  //     .subscribe(response => {
  //       this.totalElements= response.totalElements;
  //       this.userSubject.next(response.contents);
  //     });
  // }
}