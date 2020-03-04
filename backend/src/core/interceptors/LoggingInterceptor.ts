import { Injectable, NestInterceptor, ExecutionContext, Logger, CallHandler } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
    if (env === 'development') {
      const request = context.switchToHttp().getRequest();
      const method = request.method;
      const url = request.originalUrl;
      const className = context.getClass().name;

      Logger.log(`{${url}, ${method}} Before...`, className, false);
      Logger.log(`query: ${JSON.stringify(context.getArgs()[0].query)}`, className, false);
      Logger.log(`body: ${JSON.stringify(context.getArgs()[0].body)}`, className, false);

      return next
        .handle()
        .pipe(
          tap(() => {
            const response = context.switchToHttp().getResponse();
            Logger.log(`{${url}, ${method}} After... ${response.statusCode}`, className);
          }),
          catchError((error) => {
            const response = context.switchToHttp().getResponse();
            Logger.error(`{${url}, ${method}} After... ${response.statusCode}`, JSON.stringify(error.response), className);
            return throwError(error);
          }),
        );
    }
  }
}
