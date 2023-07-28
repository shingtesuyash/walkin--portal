import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWalkinsComponent } from './view-walkins.component';

describe('ViewWalkinsComponent', () => {
  let component: ViewWalkinsComponent;
  let fixture: ComponentFixture<ViewWalkinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewWalkinsComponent]
    });
    fixture = TestBed.createComponent(ViewWalkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
