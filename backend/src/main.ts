import { NestFactory, Reflector } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './modules/ApplicationModule';

import * as config from 'config';
import * as express from 'express';

async function bootstrap() {

  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));  

  if (process.env.NODE_ENV !== 'production') {
    const options = new DocumentBuilder()
      .addBearerAuth('Authorization', 'header')
      .setTitle(config.get('swagger.title'))
      .setDescription(config.get('swagger.description'))
      .setVersion(config.get('swagger.version'))
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);
  }
  Logger.log('================', 'Main', false);
  Logger.log(`PORT : ${config.get('server.port')}`, 'Main', false);
  if (process.env.NODE_ENV) {
    Logger.log(`MODE : ${process.env.NODE_ENV}`, 'Main', false);
  }
  Logger.log('================', 'Main', false);
  app.use(express.static('/public'));

  await app.listen(config.get('server.port'));
}
bootstrap();
