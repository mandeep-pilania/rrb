import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedleBearingsComponent } from './needle-bearings.component';

describe('NeedleBearingsComponent', () => {
  let component: NeedleBearingsComponent;
  let fixture: ComponentFixture<NeedleBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeedleBearingsComponent]
    });
    fixture = TestBed.createComponent(NeedleBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
