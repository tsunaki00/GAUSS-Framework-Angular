import { Injectable, Inject } from '@nestjs/common';
import { TodoCreateDto } from './TodoDto';
import { Connection, Repository } from 'typeorm';
import { AbstractDocumentService } from '../../core/AbstractDocumentService';
import { TodoEntity } from '../../entities/TodoEntity';

import { ObjectID } from 'mongodb';

@Injectable()
export class TodoService extends AbstractDocumentService<TodoEntity> {

  
  constructor(private readonly connection: Connection) {
    super();
    this.repository = connection.getMongoRepository(TodoEntity);
  }


  async findAll(): Promise<any[]> {
    return await this.find();
  }

  async create(createDto: TodoCreateDto): Promise<any> {
    let entity = new TodoEntity();
    entity.message = createDto.message;
    entity.date = new Date();
    return await this.save(entity);
  }

  async delete(id: string): Promise<any> {
    let todo = await this.findOne({ where : { "_id" : new ObjectID(id) }});
    return await this.remove(todo);
  }  
}
