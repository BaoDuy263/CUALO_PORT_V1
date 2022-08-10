import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPackingIndexComponent } from './plan-packing-index.component';

describe('PlanPackingIndexComponent', () => {
  let component: PlanPackingIndexComponent;
  let fixture: ComponentFixture<PlanPackingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPackingIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPackingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
