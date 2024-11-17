import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoknowgoodqualityComponent } from './howtoknowgoodquality.component';

describe('HowtoknowgoodqualityComponent', () => {
  let component: HowtoknowgoodqualityComponent;
  let fixture: ComponentFixture<HowtoknowgoodqualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowtoknowgoodqualityComponent]
    });
    fixture = TestBed.createComponent(HowtoknowgoodqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
