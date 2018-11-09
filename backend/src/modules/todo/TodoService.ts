import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { TodoCreateDto } from './TodoDto';
import { Connection, Repository } from 'typeorm';
import { TodoEntity } from 'entities/TodoEntity';

@Injectable()
export class TodoService {
  private repository;
  constructor(protected readonly connection: Connection) {
    this.repository = connection.getRepository(TodoEntity);
  }


  async findAll(): Promise<any[]> {
    return await this.repository.find();
  }

  async create(createDto: TodoCreateDto): Promise<any> {
    let entity = new TodoEntity();
    entity.message = createDto.message;
    entity.date = new Date();
    return await this.repository.save(entity);
  }

  async delete(id: string): Promise<any> {
    return await this.repository.remove({ _id : id });
  }  
}
