import { TestBed } from '@angular/core/testing';

import { LaptopdataService } from './laptopdata.service';

describe('LaptopdataService', () => {
  let service: LaptopdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
