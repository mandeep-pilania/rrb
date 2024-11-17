import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcBearingsComponent } from './uc-bearings.component';

describe('UcBearingsComponent', () => {
  let component: UcBearingsComponent;
  let fixture: ComponentFixture<UcBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UcBearingsComponent]
    });
    fixture = TestBed.createComponent(UcBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
