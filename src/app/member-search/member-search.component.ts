import { Component, OnInit } from '@angular/core';
import { MemberSearchService } from '../member-search.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  constructor(private memberSearchService: MemberSearchService) { }

  ngOnInit() {
  }

  searchMembers () {
    this.memberSearchService.searchMembers()
  }
}
