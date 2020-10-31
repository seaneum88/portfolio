import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HF3Component } from './hf3.component';

describe('HF3Component', () => {
  let component: HF3Component;
  let fixture: ComponentFixture<HF3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HF3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HF3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
