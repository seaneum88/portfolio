import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodgingFallingThingComponent } from './dodging-falling-thing.component';

describe('DodgingFallingThingComponent', () => {
  let component: DodgingFallingThingComponent;
  let fixture: ComponentFixture<DodgingFallingThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodgingFallingThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodgingFallingThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
