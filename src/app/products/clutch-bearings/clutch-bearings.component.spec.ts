import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClutchBearingsComponent } from './clutch-bearings.component';

describe('ClutchBearingsComponent', () => {
  let component: ClutchBearingsComponent;
  let fixture: ComponentFixture<ClutchBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClutchBearingsComponent]
    });
    fixture = TestBed.createComponent(ClutchBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
