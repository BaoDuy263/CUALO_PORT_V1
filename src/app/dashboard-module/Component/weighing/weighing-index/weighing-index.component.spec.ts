import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingIndexComponent } from './weighing-index.component';

describe('WeighingIndexComponent', () => {
  let component: WeighingIndexComponent;
  let fixture: ComponentFixture<WeighingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeighingIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeighingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
