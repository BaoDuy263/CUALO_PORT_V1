import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCustomerDeleteComponent } from './booking-customer-delete.component';

describe('BookingCustomerDeleteComponent', () => {
  let component: BookingCustomerDeleteComponent;
  let fixture: ComponentFixture<BookingCustomerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCustomerDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCustomerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
