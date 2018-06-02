import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Character } from '../character';
import { CharacterclassService } from '../characterclass.service';
import { JoinService } from '../join.service';
import { GuildApplication } from '../guildapplication';
import {Router} from '@angular/router';

declare var $: any;

/* global $ */

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  applying: boolean = false
  character: Character = {
    name: '',
    realm: 'Emerald Dream',
    class: '',
    specs: [],
    armouryLink: ''
  };

  guildApplication: GuildApplication = {
    id: 0,
    username: '',
    type: '',
    birthDate: '01/01/1900',
    location: 'unknown',
    referalCode: '',
    joinReason: '',
    valueToOOM: '',
    howFound: '',
    guildHistory: '',
    questionsOOM: '',
    about: '',
    character: this.character,
    status: '',
    applied: '',
    updated: '',
    updatedBy: '',
    armoryLink: ''
  }

  user: User = {
    username: '',
    birthDate: '01/01/1900',
    location: 'unknown',
    raider: true
  };

  
  disableForm = true;
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

  constructor(private joinService: JoinService, private classService: CharacterclassService, private router: Router) { }

  ngOnInit() {
    this.getClasses()

    $(document).ready(function(){
      $('.modal').modal();
    });
  }

  modelChange () {
    console.log('model changed')
    // this.disableForm = false

    this.validateForm()
  }

   validateForm () {
     console.log('validate form')
     console.log(this.armouryLink)
    let disable = false
    if (this.user.username === '' ||
      this.aboutYou === '' ||
    this.reasonForJoining === '' ||
    this.valueToOOM === '' ||
this.guildHistory === '' ||
this.armouryLink === '') {
      disable = true
    }

    this.disableForm = disable
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
    // this.characterClasses = this.classService.getClasses()
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
    this.applying = true
    this.guildApplication.username = this.user.username
    this.guildApplication.type = (this.user.raider) ? 'Raider' : 'Social'
    this.guildApplication.birthDate = this.user.birthDate
    this.guildApplication.location = this.user.location
    this.guildApplication.referalCode = this.referralCode
    this.guildApplication.joinReason = this.reasonForJoining
    this.guildApplication.valueToOOM = this.valueToOOM
    this.guildApplication.howFound = this.howFound
    this.guildApplication.guildHistory = this.guildHistory
    this.guildApplication.questionsOOM = this.applicantQuestions
    this.guildApplication.about = this.aboutYou
    this.guildApplication.armoryLink = this.armouryLink
    this.guildApplication.character = {
      name: this.character.name,
      realm: (this.emeraldDream) ? 'Emerald Dream' : 'Teranes',
      class: this.characterClass,
      specs: this.specs,
      armouryLink: this.armouryLink
    }
   




    this.joinService.submitApplication(this.guildApplication).subscribe((res) => {
      this.applying = false
      this.router.navigateByUrl('/applications');
    })
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
