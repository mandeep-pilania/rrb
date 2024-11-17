import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteeringBearingsComponent } from './steering-bearings.component';

describe('SteeringBearingsComponent', () => {
  let component: SteeringBearingsComponent;
  let fixture: ComponentFixture<SteeringBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SteeringBearingsComponent]
    });
    fixture = TestBed.createComponent(SteeringBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
