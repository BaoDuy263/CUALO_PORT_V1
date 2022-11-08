import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPerformContFormPortComponent } from './index-perform-cont-form-port.component';

describe('IndexPerformContFormPortComponent', () => {
  let component: IndexPerformContFormPortComponent;
  let fixture: ComponentFixture<IndexPerformContFormPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPerformContFormPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPerformContFormPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
