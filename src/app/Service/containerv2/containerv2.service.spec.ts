import { TestBed } from '@angular/core/testing';

import { Containerv2Service } from './containerv2.service';

describe('Containerv2Service', () => {
  let service: Containerv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Containerv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
