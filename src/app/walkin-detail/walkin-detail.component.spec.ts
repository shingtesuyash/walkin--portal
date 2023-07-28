import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinDetailComponent } from './walkin-detail.component';

describe('WalkinDetailComponent', () => {
  let component: WalkinDetailComponent;
  let fixture: ComponentFixture<WalkinDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalkinDetailComponent]
    });
    fixture = TestBed.createComponent(WalkinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
