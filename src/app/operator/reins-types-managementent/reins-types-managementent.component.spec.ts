import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsTypesManagemententComponent } from './reins-types-managementent.component';

describe('ReinsTypesManagemententComponent', () => {
  let component: ReinsTypesManagemententComponent;
  let fixture: ComponentFixture<ReinsTypesManagemententComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinsTypesManagemententComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsTypesManagemententComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
