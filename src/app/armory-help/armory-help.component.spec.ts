import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoryHelpComponent } from './armory-help.component';

describe('ArmoryHelpComponent', () => {
  let component: ArmoryHelpComponent;
  let fixture: ComponentFixture<ArmoryHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmoryHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmoryHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
