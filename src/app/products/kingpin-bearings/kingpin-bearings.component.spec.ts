import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingpinBearingsComponent } from './kingpin-bearings.component';

describe('KingpinBearingsComponent', () => {
  let component: KingpinBearingsComponent;
  let fixture: ComponentFixture<KingpinBearingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KingpinBearingsComponent]
    });
    fixture = TestBed.createComponent(KingpinBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
