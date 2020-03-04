import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { AuthService } from '../../app/common/service/AuthService';
 
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor( private router: Router, private service: AuthService) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // ログイン期限
    if (window.location.hash.indexOf('login') > -1) {
      return next.handle(request);
    }
    return next.handle(request).pipe(catchError((err:any) => {
      if (err.status === 401) {
        this.router.navigate(['/login']);
      }
      if (err && err.error && err.error.message) {
        const error = err.error.message || err.statusText;
        return throwError(error);
      }
    }));
  }
}