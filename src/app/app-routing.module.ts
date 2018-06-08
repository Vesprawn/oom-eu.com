import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NaboutComponent } from './nabout/nabout.component';
import { FaqComponent } from './faq/faq.component';
import { RulesAndGuidelinesComponent } from './rules-and-guidelines/rules-and-guidelines.component';
import { JoinComponent } from './join/join.component';
import { MembersComponent } from './members/members.component';
import { GuildApplicationComponent } from './guild-application/guild-application.component';
import { ApplicationsComponent } from './applications/applications.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'nabout', component: NaboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'rules', component: RulesAndGuidelinesComponent },
  { path: 'join', component: JoinComponent },
  { path: 'members', component: MembersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'guildapplication/:id', component: GuildApplicationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
