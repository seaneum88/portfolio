import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MD3Component } from './md3.component';

describe('MD3Component', () => {
  let component: MD3Component;
  let fixture: ComponentFixture<MD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
