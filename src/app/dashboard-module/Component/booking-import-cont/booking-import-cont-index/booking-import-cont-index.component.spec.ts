import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingImportContIndexComponent } from './booking-import-cont-index.component';

describe('BookingImportContIndexComponent', () => {
  let component: BookingImportContIndexComponent;
  let fixture: ComponentFixture<BookingImportContIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingImportContIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingImportContIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
