import { Entity, Column, BeforeInsert, BeforeUpdate, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, classToPlain, Transform } from 'class-transformer';

import * as config from 'config';
import * as moment from 'moment';

/**
 * エンティティ抽象クラス
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2019/06/10  新規作成
 *
 */
@Entity()
export abstract class AbstractEntity {
  // @PrimaryGeneratedColumn()
  // readonly tid?: number;

  @CreateDateColumn({ name: 'createdAt', type: 'timestamp' })
  @Transform((createdAt: Date) => { 
    return moment(createdAt).format('YYYY-MM-DD HH:mm');
  })
  readonly createdAt?: Date;

  @Exclude()
  @Column({ name: 'createdBy', type: 'varchar', length: 255, default: 'SYSTEM' })
  createdBy?: string;

  @UpdateDateColumn({ name: 'updatedAt', type: 'timestamp' })
  @Transform((updatedAt: Date) => { 
    return moment(updatedAt).format('YYYY-MM-DD HH:mm');
  })
  readonly updatedAt?: Date;

  @Exclude()
  @Column({ name: 'updatedBy', type: 'varchar', length: 255, nullable: true })
  updatedBy?: string;
  
  // ユーザ名詰替え用
  @Exclude()
  sysUserName:string = config.get('database.sysUser');

  @BeforeInsert()
  public setupCreateEntity(): void {
    if (this.sysUserName) {
      this.createdBy = this.sysUserName;
      this.updatedBy = this.sysUserName;
      delete this["sysUserName"];
    }
  }


  @BeforeUpdate()
  public setupUpdateEntity(): void {
    if (this.sysUserName) {
      this.updatedBy = this.sysUserName;
      delete this["sysUserName"];
    }
  }

  public toJSON() {
    return classToPlain(this);
  }
}
