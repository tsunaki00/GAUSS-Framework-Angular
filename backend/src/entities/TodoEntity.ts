import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';
import { Transform } from 'class-transformer';
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
@Entity({ name : 'todo' })
export class TodoEntity {

  @ObjectIdColumn()
  @Transform((id: ObjectID) => id.toHexString(), {toPlainOnly: true})
  id: ObjectID;

  @Column()
  message : string;

  @Column()
  date : Date;


}