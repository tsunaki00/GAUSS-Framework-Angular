import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AbstractService } from '../../../core/common/service/AbstractService';

@Injectable()
export class AuthService extends AbstractService {
  constructor(private router: Router, private http: HttpClient) {
    super();
  }
  public me(isImage?) {
    return this.http.post<any>(`${this.API_URL}/auth/me`,{
      isImage
    });
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  public login(username: string, password: string) {
    return this.http.post<any>(`${this.API_URL}/auth/login`, {email: username, password: password})
      .pipe(map(data => {
        if (data && data.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(data));
          return true;
        } else {
          return false;
        }
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


}
