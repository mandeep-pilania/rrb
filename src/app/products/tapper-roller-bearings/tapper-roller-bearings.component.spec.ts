import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapperRollerBearingsComponent } from './tapper-roller-bearings.component';

describe('TapperRollerBearingsComponent', () => {
  let component: TapperRollerBearingsComponent;
  let fixture: ComponentFixture<TapperRollerBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapperRollerBearingsComponent]
    });
    fixture = TestBed.createComponent(TapperRollerBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
