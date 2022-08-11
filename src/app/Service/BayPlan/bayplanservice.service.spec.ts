import { TestBed } from '@angular/core/testing';

import { BayplanserviceService } from './bayplanservice.service';

describe('BayplanserviceService', () => {
  let service: BayplanserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BayplanserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
