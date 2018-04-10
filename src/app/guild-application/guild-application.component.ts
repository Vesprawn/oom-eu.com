import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { JoinService } from '../join.service';
import {GuildApplication} from '../guildapplication'

@Component({
  selector: 'app-guild-application',
  templateUrl: './guild-application.component.html',
  styleUrls: ['./guild-application.component.css']
})
export class GuildApplicationComponent implements OnInit {
  guildApplication: GuildApplication
  loading = true

  constructor(private route: ActivatedRoute,
    private router: Router,
    private joinService: JoinService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.joinService.getApplication(id).subscribe((guildApplication) => {
      // console.log('success')
      console.log(guildApplication)
      this.guildApplication = guildApplication
      this.loading = false
      // console.log(member)
    });
  }

}
