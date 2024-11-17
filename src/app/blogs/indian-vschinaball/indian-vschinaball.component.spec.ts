import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianVSchinaballComponent } from './indian-vschinaball.component';

describe('IndianVSchinaballComponent', () => {
  let component: IndianVSchinaballComponent;
  let fixture: ComponentFixture<IndianVSchinaballComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndianVSchinaballComponent]
    });
    fixture = TestBed.createComponent(IndianVSchinaballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
