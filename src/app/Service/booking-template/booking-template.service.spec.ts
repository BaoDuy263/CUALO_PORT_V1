import { TestBed } from '@angular/core/testing';

import { BookingTemplateService } from './booking-template.service';

describe('BookingTemplateService', () => {
  let service: BookingTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
