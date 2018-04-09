import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { MemberSearchService } from '../member-search.service';
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

  constructor(private memberSearchService: MemberSearchService, private memberService: MemberService, private classService: CharacterclassService) { }

  ngOnInit() {
    this.getMembers();
  }

  searchMembers (event: any) {
    // this.memberSearchService.searchMembers()
    // let search = event.target.value.toLowerCase()
    // console.log search
    // let results = this.members.filter((member) => {
    //   search = search.toLowerCase()
    //   let name = member.name.toLowerCase()

    //   if (name.includes(search)) {
    //     return true
    //   }
    // })

    // console.log(results)
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
          let realm = (member.realmId === 0) ? 'emerald-dream' : 'terenas'
          console.log(member.realmId)
          member.armouryLink = `https://worldofwarcraft.com/en-gb/character/${realm}/${member.name}`
          // member.armouryLink = 'https://worldofwarcraft.com/en-gb/character/terenas/warprawn'
          member.classIcon = member.className.split(' ').join('').toLowerCase()
          // console.log(member.className.split(' ').join('').toLowerCase())
          member.rankName = rank[0].name
        })
      })
    });
  }
}
