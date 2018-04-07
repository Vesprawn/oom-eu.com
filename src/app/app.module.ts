import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { RulesComponent } from './rules/rules.component';
import { JoinComponent } from './join/join.component';
import { MembersComponent } from './members/members.component';
import { MemberService } from './member.service';
import { MemberSearchService } from './member-search.service';
import { JoinService } from './join.service';
import { CharacterclassService } from './characterclass.service';
import { ApplicationsComponent } from './applications/applications.component';
import { ClassiconComponent } from './classicon/classicon.component';
import { MemberSearchComponent } from './member-search/member-search.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    AboutComponent,
    FaqComponent,
    RulesComponent,
    JoinComponent,
    MembersComponent,
    ApplicationsComponent,
    ClassiconComponent,
    MemberSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    JoinService,
    MemberService,
    MemberSearchService,
    CharacterclassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
