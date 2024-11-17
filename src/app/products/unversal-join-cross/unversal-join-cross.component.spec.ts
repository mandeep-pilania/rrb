import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnversalJoinCrossComponent } from './unversal-join-cross.component';

describe('UnversalJoinCrossComponent', () => {
  let component: UnversalJoinCrossComponent;
  let fixture: ComponentFixture<UnversalJoinCrossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnversalJoinCrossComponent]
    });
    fixture = TestBed.createComponent(UnversalJoinCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
