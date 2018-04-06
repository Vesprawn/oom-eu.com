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
import { CharacterclassService } from './characterclass.service';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    AboutComponent,
    FaqComponent,
    RulesComponent,
    JoinComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MemberService,
    CharacterclassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
