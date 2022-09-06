import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformCreateComponent } from './perform-create.component';

describe('PerformCreateComponent', () => {
  let component: PerformCreateComponent;
  let fixture: ComponentFixture<PerformCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
