import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { AbstractRestController } from '../../core/AbstractRestController';
import { TodoService } from './TodoService';
import { TodoCreateDto } from './TodoDto';

/**
 * ダッシュボードコントローラ
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付        更新者        内容
 *  1 2018/06/28 T.Utsunomiya   新規作成
 *
 */
@ApiBearerAuth()
@ApiUseTags('Todo API')
@Controller('todo')
export class TodoController extends AbstractRestController {
  constructor(
    private readonly service: TodoService
  ) {
    super();
   }

  /**
   * ToDoリストを取得する
   */
  @ApiOperation({
    title: 'Todo',
    description: 'ToDoリストを取得する',
  })
  @Get()
  async get() {
    return this.service.findAll();
  }

  /**
   * Annotationの登録処理
   * @param param 検索条件
   *
   */
  @ApiOperation({
    title: 'Todoの登録処理',
    description: 'Todoを登録',
  })
  @Post()
  async create(@Body() param: TodoCreateDto) {
    return this.service.create(param);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return this.service.delete(id);
  }
}
