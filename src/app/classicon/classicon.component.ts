import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classicon',
  templateUrl: './classicon.component.html',
  styleUrls: ['./classicon.component.css']
})
export class ClassiconComponent implements OnInit {
  @Input() classIcon: string

  imagePath: string

  constructor() { }

  ngOnInit() {
    this.imagePath = `/assets/classicon/classicon_${this.classIcon}.jpg`
    // console.log(this.classId)
  }

  // getClassIcon () {

  // }
}
