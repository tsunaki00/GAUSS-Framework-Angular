import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from 'modules/ApplicationModule';
import { TransformInterceptor } from 'core/interceptors/TransformInterceptor';
import { RolesGuard } from 'core/guards/RolesGuard';
import * as config from 'config';
import { Reflector } from '@nestjs/core';

/**
 * サーバの起動プログラム
 * @see https://docs.nestjs.com/recipes/swagger
 */
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalGuards(new RolesGuard(new Reflector()));

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
  Logger.log(`MODE : ${process.env.NODE_ENV}`, 'Main', false);
  Logger.log('================', 'Main', false);

  await app.listen(config.get('server.port'));
}
bootstrap();
