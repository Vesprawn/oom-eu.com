import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildApplicationComponent } from './guild-application.component';

describe('GuildApplicationComponent', () => {
  let component: GuildApplicationComponent;
  let fixture: ComponentFixture<GuildApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
