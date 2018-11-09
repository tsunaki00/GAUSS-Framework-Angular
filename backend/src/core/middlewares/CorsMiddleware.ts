import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      // list os domains 
      res.header('Cache-Control', 'no-cache');
      res.header('Access-Control-Allow-Origin', '*');
      // list of methods (e.g GET,HEAD,PUT,PATCH,POST,DELETE)
      res.header('Access-Control-Allow-Methods', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    };
  }
}
