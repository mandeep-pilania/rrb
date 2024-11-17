import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallBearingsComponent } from './ball-bearings.component';

describe('BallBearingsComponent', () => {
  let component: BallBearingsComponent;
  let fixture: ComponentFixture<BallBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BallBearingsComponent]
    });
    fixture = TestBed.createComponent(BallBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
