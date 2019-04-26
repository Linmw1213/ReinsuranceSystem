import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsClaimManagementComponent } from './reins-claim-management.component';

describe('ReinsClaimManagementComponent', () => {
  let component: ReinsClaimManagementComponent;
  let fixture: ComponentFixture<ReinsClaimManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinsClaimManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsClaimManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
