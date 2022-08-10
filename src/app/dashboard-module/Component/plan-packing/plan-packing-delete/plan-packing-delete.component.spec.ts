import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPackingDeleteComponent } from './plan-packing-delete.component';

describe('PlanPackingDeleteComponent', () => {
  let component: PlanPackingDeleteComponent;
  let fixture: ComponentFixture<PlanPackingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPackingDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPackingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
