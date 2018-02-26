import { Injectable } from '@angular/core';
import { Member } from './member';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MemberService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>('http://localhost:1337/members');
  }

  // getMembers() {
  //   // return this.http.get('http://localhost:1337/members').subscribe(data => {
  //   //   return data;
  //   // });

  //   this.http.get<Member>('http://localhost:1337/members')
  //   // return of(this.http.get<Member>('http://localhost:1337/members'))

  //   // return of([
  //   //     {name: 'Prawn'},
  //   //     {name: 'Ceran'},
  //   //     {name: 'Scar'}
  //   //   ]);
  // }

  // getMembers(): Member[] {
  //   return [
  //     {name: 'Prawm'},
  //     {name: 'Ceran'},
  //     {name: 'Scar'}
  //   ];
  // }
}
