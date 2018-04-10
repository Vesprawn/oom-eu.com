import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { RulesComponent } from './rules/rules.component';
import { JoinComponent } from './join/join.component';
import { MembersComponent } from './members/members.component';
import { GuildApplicationComponent } from './guild-application/guild-application.component';
import { ApplicationsComponent } from './applications/applications.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'join', component: JoinComponent },
  { path: 'members', component: MembersComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'guildapplication/:id', component: GuildApplicationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
