import { Injectable } from '@nestjs/common';
import {  FindManyOptions, FindOneOptions, MongoRepository } from 'typeorm';


/**
 * サービス抽象クラス
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2019/06/10  新規作成
 *
 */
@Injectable()
export abstract class AbstractDocumentService<ENTITY> {

  protected repository: MongoRepository<ENTITY>;

  protected async find(options?: FindManyOptions<ENTITY>): Promise<ENTITY[]> {
    return this.repository.find(options);
  }

  protected async findAll(options?: FindManyOptions<ENTITY>): Promise<ENTITY[]> {
    return this.repository.find(options);
  }

  protected async findOne(options?: FindOneOptions<ENTITY>): Promise<ENTITY | undefined> {
    return this.repository.findOne(options);
  }

  /**
   * 主キーによる検索
   * @param id 検索キー
   * @return 検索結果
   */
  protected async findByIds(id: number): Promise<ENTITY | undefined> {
    return this.repository.findOne(id);
  }

  /**
   * 新規登録
   * @param entity 登録内容
   * @return 登録結果
   */
  protected async create(entity: any): Promise<ENTITY | undefined> {
    return this.repository.save(entity);
  }
  /**
   * 更新
   * @param conditions
   * @param partialEntity
   * @param options
   */
  protected async save(entity: any): Promise<ENTITY | undefined> {
    return this.repository.save(entity);
  }
  /**
   * 更新
   * @param conditions
   * @param partialEntity
   * @param options
   */
  protected async update(entity: any): Promise<ENTITY | undefined> {
    return this.repository.save(entity);
  }

  /**
   * 削除
   * @param entity
   */
  protected async remove(entity: any): Promise<void> {
    this.repository.remove(entity);
  }
  /**
   * 削除
   * @param entity
   */
  protected async delete(entity: any): Promise<void> {
    this.repository.remove(entity);
  }

}
