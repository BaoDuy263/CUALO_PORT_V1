import { TestBed } from '@angular/core/testing';

import { ImportContFromShipService } from './import-cont-from-ship.service';

describe('ImportContFromShipService', () => {
  let service: ImportContFromShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportContFromShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
