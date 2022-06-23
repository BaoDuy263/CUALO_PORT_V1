import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingImportContCreateComponent } from './booking-import-cont-create.component';

describe('BookingImportContCreateComponent', () => {
  let component: BookingImportContCreateComponent;
  let fixture: ComponentFixture<BookingImportContCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingImportContCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingImportContCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
