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
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  logIn (email, password): Observable<any> {
    console.log(email)
    console.log(password)
    
    let options = {
      email: email,
      password: password
    }

    return this.http.post<any>(`${environment.restAPI}/logIn`, options, httpOptions)
  }

}
