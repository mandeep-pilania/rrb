import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterPumpBearingsComponent } from './water-pump-bearings.component';

describe('WaterPumpBearingsComponent', () => {
  let component: WaterPumpBearingsComponent;
  let fixture: ComponentFixture<WaterPumpBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterPumpBearingsComponent]
    });
    fixture = TestBed.createComponent(WaterPumpBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
