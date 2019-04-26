import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemManagementeComponent } from './system-managemente.component';

describe('SystemManagementeComponent', () => {
  let component: SystemManagementeComponent;
  let fixture: ComponentFixture<SystemManagementeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemManagementeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemManagementeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
