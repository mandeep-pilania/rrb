import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrustBearingsComponent } from './thrust-bearings.component';

describe('ThrustBearingsComponent', () => {
  let component: ThrustBearingsComponent;
  let fixture: ComponentFixture<ThrustBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThrustBearingsComponent]
    });
    fixture = TestBed.createComponent(ThrustBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
