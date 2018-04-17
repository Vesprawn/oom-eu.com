import { Component } from '@angular/core';
declare var M: any;
// import * as $ from 'jquery';
// import { MaterializeModule } from 'angular2-materialize';
// import { M } from 'materialize-css';

// const M = require('materialize-css')
// declare var $:JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Out of Mana EU';

  ngOnInit() {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem, {});
  }
}
