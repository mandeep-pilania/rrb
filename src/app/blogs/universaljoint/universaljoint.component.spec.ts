import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversaljointComponent } from './universaljoint.component';

describe('UniversaljointComponent', () => {
  let component: UniversaljointComponent;
  let fixture: ComponentFixture<UniversaljointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversaljointComponent]
    });
    fixture = TestBed.createComponent(UniversaljointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
