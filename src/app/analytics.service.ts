import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable()
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  update(): Observable<any> {
    return this.http.post<any>(`${environment.restAPI}/analytics`, {}, httpOptions)
  }

}
