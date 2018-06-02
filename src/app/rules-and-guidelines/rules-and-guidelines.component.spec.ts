import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAndGuidelinesComponent } from './rules-and-guidelines.component';

describe('RulesAndGuidelinesComponent', () => {
  let component: RulesAndGuidelinesComponent;
  let fixture: ComponentFixture<RulesAndGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesAndGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesAndGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
