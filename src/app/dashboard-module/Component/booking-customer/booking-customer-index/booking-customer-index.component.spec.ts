import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCustomerIndexComponent } from './booking-customer-index.component';

describe('BookingCustomerIndexComponent', () => {
  let component: BookingCustomerIndexComponent;
  let fixture: ComponentFixture<BookingCustomerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCustomerIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCustomerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
