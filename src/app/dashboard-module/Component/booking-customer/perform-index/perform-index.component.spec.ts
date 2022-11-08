import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformIndexComponent } from './perform-index.component';

describe('PerformIndexComponent', () => {
  let component: PerformIndexComponent;
  let fixture: ComponentFixture<PerformIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
