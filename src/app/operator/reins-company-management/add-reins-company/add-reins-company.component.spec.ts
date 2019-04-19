import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReinsCompanyComponent } from './add-reins-company.component';

describe('AddReinsCompanyComponent', () => {
  let component: AddReinsCompanyComponent;
  let fixture: ComponentFixture<AddReinsCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReinsCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReinsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
