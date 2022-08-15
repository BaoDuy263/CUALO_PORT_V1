import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpContTempIndexComponent } from './imp-cont-temp-index.component';

describe('ImpContTempIndexComponent', () => {
  let component: ImpContTempIndexComponent;
  let fixture: ComponentFixture<ImpContTempIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpContTempIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpContTempIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
