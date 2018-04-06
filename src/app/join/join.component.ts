import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Character } from '../character';
import { CharacterclassService } from '../characterclass.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  user: User = {
    username: '',
    birthDate: '',
    location: '',
    raider: true
  };

  character: Character = {
    name: '',
    realm: 'Emerald Dream',
    class: '',
    specs: [],
    armouryLink: ''
  };

  // raider = true;
  armouryLink = '';
  referralCode = '';
  howFound = '';
  guildHistory = '';
  reasonForJoining = '';
  valueToOOM = '';
  applicantQuestions = '';
  emeraldDream = true
  aboutYou = ''
  characterClasses = []
  characterClass = ''
  specs = []

  constructor(private classService: CharacterclassService) { }

  ngOnInit() {
    this.getClasses()
  }

  deselectClasses () {
    this.characterClasses.forEach((c) => {
      c.selected = false

      c.specs.forEach((s) => {
        s.selected = false
      })
    })
  }

  clickClass (obj) {
    console.log(obj)
    if (obj.selected === true) {
      obj.selected = false
      this.characterClass = ''
    } else {
      this.deselectClasses()
      obj.selected = true
      this.characterClass = obj.name
      this.specs = obj.specs
    }
  }

  getClasses () {
    this.characterClasses = this.classService.getClasses()
  }

  clickSpec (spec) {
    if (spec.selected === true) {
      spec.selected = false
    } else {
      spec.selected = true
    }
    // console.log(this.specs)
  }

  apply () {
    let application = {
      type: (this.user.raider) ? 'Raider' : 'Social',
      name: this.user.username,
      birthDate: this.user.birthDate,
      location: this.user.location,
      referalCode: this.referralCode,
      joinReason: this.reasonForJoining,
      valueToOOM: this.valueToOOM,
      howFound: this.howFound,
      guildHistory: this.guildHistory,
      applicantQuestions: this.applicantQuestions,
      aboutYou: this.aboutYou,
      character: {
        name: this.character.name,
        realm: (this.emeraldDream) ? 'Emerald Dream' : 'Teranes',
        _class: this.characterClass,
        specs: this.specs,
        armouryLink: this.armouryLink
      }
    }

    console.log(application)
  }

  toggleRaider () {
    if (this.user.raider === true) {
      this.user.raider = false
    } else {
      this.user.raider = true
    }
  }

  toggleRealm () {
    console.log('test')
    if (this.emeraldDream === true) {
      this.emeraldDream = false
      this.character.realm = 'Teranes'
    } else {
      this.emeraldDream = true
      this.character.realm = 'Emerald Dream'
    }
  }

}
