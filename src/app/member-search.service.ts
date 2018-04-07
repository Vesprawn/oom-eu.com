import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Member } from './member';

@Injectable()
export class MemberSearchService {
  private members = new Subject<Member[]>();
  constructor() { }

  searchMembers () {
    console.log('search members')
  }

}
