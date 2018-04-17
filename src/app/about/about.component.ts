import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// import * as $ from '../../../config/globals';
// ]
declare var $: any;

/* global $ */

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var elem = document.querySelector('.parallax');
    // console.log(elem)
    // console.log('M')
    // console.log(M)
    // var instance = M.Parallax.init(elem, {});
    $('.parallax').parallax();
  }

}

