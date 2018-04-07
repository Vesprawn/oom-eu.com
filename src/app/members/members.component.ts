import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { CharacterclassService } from '../characterclass.service';
import { Member } from '../member';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MemberService, private classService: CharacterclassService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe((members) => {
      this.classService.getClasses().subscribe((classes) => {
        this.members = members

        members.forEach((member) => {
          let klass = classes.filter(function( obj ) {
            return obj.id == member.classId
          })

          let rank = environment.Ranks.filter(function( obj ) {
            return obj.id == member.rankId
          })

          member.className = klass[0].name
          member.rankName = rank[0].name
        })
      })
    });
  }
}
