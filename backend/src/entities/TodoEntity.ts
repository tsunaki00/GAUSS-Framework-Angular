import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';
/**
 * テーブルエンティティ
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2018/08/13  新規作成
 *
 */
@Entity()
export class TodoEntity {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  message : string;

  @Column()
  date : Date;


}