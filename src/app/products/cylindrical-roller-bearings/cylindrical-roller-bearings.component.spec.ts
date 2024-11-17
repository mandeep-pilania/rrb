import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylindricalRollerBearingsComponent } from './cylindrical-roller-bearings.component';

describe('CylindricalRollerBearingsComponent', () => {
  let component: CylindricalRollerBearingsComponent;
  let fixture: ComponentFixture<CylindricalRollerBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CylindricalRollerBearingsComponent]
    });
    fixture = TestBed.createComponent(CylindricalRollerBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
