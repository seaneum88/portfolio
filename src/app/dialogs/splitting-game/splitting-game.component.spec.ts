import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplittingGameComponent } from './splitting-game.component';

describe('SplittingGameComponent', () => {
  let component: SplittingGameComponent;
  let fixture: ComponentFixture<SplittingGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplittingGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplittingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
