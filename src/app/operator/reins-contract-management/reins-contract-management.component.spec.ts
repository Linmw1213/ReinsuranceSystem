import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsContractManagementComponent } from './reins-contract-management.component';

describe('ReinsContractManagementComponent', () => {
  let component: ReinsContractManagementComponent;
  let fixture: ComponentFixture<ReinsContractManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinsContractManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsContractManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
