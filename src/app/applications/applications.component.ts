import { Component, OnInit } from '@angular/core';
import { JoinService } from '../join.service';
import { GuildApplication } from '../guildapplication';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  newApplications: GuildApplication[];

  constructor(private joinService: JoinService) { }

  ngOnInit() {
    this.getApplications();
  }

  getApplications (): void {
    this.joinService.getNewApplications().subscribe((applications) => {
      this.newApplications = applications
      console.log('getApplications')
      console.log(applications)
      console.log('test')
      console.log(this.newApplications)
    });
    // console.log(this.applications)
  }

}
