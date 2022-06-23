import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingImportContDeleteComponent } from './booking-import-cont-delete.component';

describe('BookingImportContDeleteComponent', () => {
  let component: BookingImportContDeleteComponent;
  let fixture: ComponentFixture<BookingImportContDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingImportContDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingImportContDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
