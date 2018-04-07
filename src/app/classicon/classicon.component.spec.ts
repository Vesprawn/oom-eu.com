import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassiconComponent } from './classicon.component';

describe('ClassiconComponent', () => {
  let component: ClassiconComponent;
  let fixture: ComponentFixture<ClassiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
