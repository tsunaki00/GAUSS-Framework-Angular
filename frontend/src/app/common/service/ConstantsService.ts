import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractService } from '../../../core/common/service/AbstractService';

@Injectable()
export class ConstantsService extends AbstractService {
  constructor(private http: HttpClient) {
    super();
  }

  public getConst(name) {
    return this.http.get(`${this.API_URL}/chat/master`, { params: { name } });
  }
}
