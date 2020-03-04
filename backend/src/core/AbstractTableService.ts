import { Injectable } from '@nestjs/common';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { AbstractRDBService } from './AbstractRDBService';

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
export abstract class AbstractTableService<ENTITY> extends AbstractRDBService {

  protected repository: Repository<ENTITY>;

  public async findAll(options?: FindManyOptions<ENTITY>): Promise<ENTITY[]> {
    return this.repository.find(options);
  }

  public async findOne(options?: FindOneOptions<ENTITY>): Promise<ENTITY | undefined> {
    return this.repository.findOne(options);
  }

  /**
   * 主キーによる検索
   * @param id 検索キー
   * @return 検索結果
   */
  public async findByIds(id: number): Promise<ENTITY | undefined> {
    return this.repository.findOne(id);
  }

  /**
   * 新規登録
   * @param entity 登録内容
   * @return 登録結果
   */
  public async create(entity: any): Promise<ENTITY | undefined> {
    return this.repository.save(entity);
  }

  /**
   * 更新
   * @param conditions
   * @param partialEntity
   * @param options
   */
  public async update(entity: any): Promise<ENTITY | undefined> {
    return this.repository.save(entity);
  }

  /**
   * 削除
   * @param entity
   */
  public async delete(entity: any): Promise<void> {
    this.repository.remove(entity);
  }

}
