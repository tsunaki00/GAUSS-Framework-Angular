import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExpressSessionMiddleware } from '@nest-middlewares/express-session';
import * as config from 'config';
import { JwtStrategy } from '../core/strategies/JwtStrategy';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import * as passport from 'passport';
import { TodoModule } from './todo/TodoModule';




@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config.get('database') }),
    TodoModule,
  ],
  providers: []
})
export class ApplicationModule implements NestModule {

  public configure(consumer: MiddlewareConsumer) {
    ExpressSessionMiddleware.configure({ secret: config.get('auth.secret') });
    consumer.apply(ExpressSessionMiddleware).forRoutes("*");
    //consumer.apply(passport.initialize()).forRoutes('*');
    // consumer.apply(passport
    //         .authenticate('jwt', { session: false }))
    //         .forRoutes('/');
  }
}