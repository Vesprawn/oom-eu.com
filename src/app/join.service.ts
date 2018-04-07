import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { GuildApplication } from './guildapplication';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable()
export class JoinService {
  constructor(private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {

    console.log('error')
    return (error: any): Observable<T> => {
      console.log(error)
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  submitApplication (guildApp: GuildApplication): Observable<GuildApplication> {
    console.log(guildApp)
    console.log(`${environment.restAPI}/join`)
    return this.http.post<GuildApplication>(`${environment.restAPI}/join`, guildApp, httpOptions)
      // .pipe(
      //   catchError(this.handleError('submitApplication', guildApp))
      // )
    // console.log('test')
  }

  getNewApplications (): Observable<GuildApplication[]> {
    return this.http.get<GuildApplication[]>(`${environment.restAPI}/newApplications`)
  }

  // /** POST: add a new hero to the database */
  // submitApplication (guildApplication: GuildApplication): Observable<GuildApplication> {
  //   return this.http.post<GuildApplication>(`${environment.restAPI}/join`, guildApplication)
  //     // .pipe(

  //     //   // catchError(this.handleError('submitApplication', guildApplication))
  //     // )
  // }
}
