import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoManagementComponent } from './user-info-management.component';

describe('UserInfoManagementComponent', () => {
  let component: UserInfoManagementComponent;
  let fixture: ComponentFixture<UserInfoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
