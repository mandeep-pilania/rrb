import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SphericalRollerBearingsComponent } from './spherical-roller-bearings.component';

describe('SphericalRollerBearingsComponent', () => {
  let component: SphericalRollerBearingsComponent;
  let fixture: ComponentFixture<SphericalRollerBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SphericalRollerBearingsComponent]
    });
    fixture = TestBed.createComponent(SphericalRollerBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
