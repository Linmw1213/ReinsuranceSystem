import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsCalculationComponent } from './reins-calculation.component';

describe('ReinsCalculationComponent', () => {
  let component: ReinsCalculationComponent;
  let fixture: ComponentFixture<ReinsCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinsCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
