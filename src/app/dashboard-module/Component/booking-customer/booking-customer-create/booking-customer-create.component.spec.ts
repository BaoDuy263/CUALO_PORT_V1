import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCustomerCreateComponent } from './booking-customer-create.component';

describe('BookingCustomerCreateComponent', () => {
  let component: BookingCustomerCreateComponent;
  let fixture: ComponentFixture<BookingCustomerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCustomerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCustomerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
