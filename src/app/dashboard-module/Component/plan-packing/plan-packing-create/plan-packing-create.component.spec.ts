import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPackingCreateComponent } from './plan-packing-create.component';

describe('PlanPackingCreateComponent', () => {
  let component: PlanPackingCreateComponent;
  let fixture: ComponentFixture<PlanPackingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPackingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPackingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
