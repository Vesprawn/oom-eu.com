import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  session = {}
  constructor() { }

  ngOnInit() {
    this.getSession()
  }

  getSession () {
    console.log('get session')
    this.session = localStorage.getItem('oom-eu.com-session')
    console.log(this.session)
  

    localStorage.setItem('oom-eu.com-session', JSON.stringify({
      user: {
        id: 1,
        rank: 1,
        name: 'Prawn'
      }
    }))
  }

}
