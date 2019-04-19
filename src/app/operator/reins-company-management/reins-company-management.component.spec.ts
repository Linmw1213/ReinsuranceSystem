import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsCompanyManagementComponent } from './reins-company-management.component';

describe('ReinsCompanyManagementComponent', () => {
  let component: ReinsCompanyManagementComponent;
  let fixture: ComponentFixture<ReinsCompanyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinsCompanyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsCompanyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
