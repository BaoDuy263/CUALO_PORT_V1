import { TestBed } from '@angular/core/testing';

import { PerformService } from './perform.service';

describe('PerformService', () => {
  let service: PerformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
