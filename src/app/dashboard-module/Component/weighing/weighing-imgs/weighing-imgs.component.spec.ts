import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingImgsComponent } from './weighing-imgs.component';

describe('WeighingImgsComponent', () => {
  let component: WeighingImgsComponent;
  let fixture: ComponentFixture<WeighingImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeighingImgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeighingImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
