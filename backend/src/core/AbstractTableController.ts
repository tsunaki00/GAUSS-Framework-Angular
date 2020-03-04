import { Get, Post, Put, Delete, HttpStatus, HttpCode, Req, Param, Body, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AbstractTableService } from './AbstractTableService';
import { AbstractRestController } from './AbstractRestController';

/**
 * Table APIコントローラ抽象クラス
 * 対象テーブルに対してCRUDを行うAPI処理を定義します。
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2019/06/10  新規作成
 *
 */
@ApiBearerAuth()
export abstract class AbstractTableController<SERVICE extends AbstractTableService<ENTITY>, ENTITY> extends AbstractRestController {
  protected readonly service: SERVICE;

  constructor() { super(); }

  /**
   * レコード取得
   * @param  req 検索条件
   * @return     検索結果
   */
  @ApiOperation({
    title: 'レコード取得',
    description: '検索条件に一致するレコードを取得します。',
  })
  @Get()
  async findAll(@Query() req): Promise<ENTITY[]> {
    return this.service.findAll(req);
  }

  /**
   * 単一レコード取得
   * @param req 検索条件
   * @return 検索結果
   */
  @ApiOperation({
    title: '単一レコード取得',
    description: '検索条件に一致するレコードを1件取得します。',
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: '検索結果' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Get(':id')
  async findById(@Param('id') id: number): Promise<ENTITY> {
    return this.service.findByIds(id);
  }

  /**
   * レコード登録
   * @param entity 登録内容
   * @return 登録したレコード
   */
  @ApiOperation({
    title: 'レコード登録',
    description: '対象テーブルにレコードを登録します。',
  })
  @ApiResponse({ status: HttpStatus.CREATED, description: '登録したレコード' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() entity: ENTITY): Promise<ENTITY> {
    return this.service.create(entity);
  }

  /**
   * レコード更新
   * @param entity 更新対象
   * @return 更新したレコード
   */
  @ApiOperation({
    title: 'レコード更新',
    description: '対象レコードを更新します。',
  })
  @ApiResponse({ status: HttpStatus.OK, description: '更新したレコード' })
  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() entity: ENTITY): Promise<ENTITY> {
    return this.service.update(entity);
  }

  /**
   * レコード削除
   * @param req 削除条件
   */
  @ApiOperation({
    title: 'レコード削除',
    description: '対象レコードを削除します。',
  })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: '削除成功' })
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Body() entity: ENTITY): Promise<void> {
    this.service.delete(entity);
  }

}
