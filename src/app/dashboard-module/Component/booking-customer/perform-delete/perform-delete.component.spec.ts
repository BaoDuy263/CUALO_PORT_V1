import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformDeleteComponent } from './perform-delete.component';

describe('PerformDeleteComponent', () => {
  let component: PerformDeleteComponent;
  let fixture: ComponentFixture<PerformDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
