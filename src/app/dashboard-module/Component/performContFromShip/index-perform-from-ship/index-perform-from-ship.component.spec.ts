import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPerformFromShipComponent } from './index-perform-from-ship.component';

describe('IndexPerformFromShipComponent', () => {
  let component: IndexPerformFromShipComponent;
  let fixture: ComponentFixture<IndexPerformFromShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPerformFromShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPerformFromShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
