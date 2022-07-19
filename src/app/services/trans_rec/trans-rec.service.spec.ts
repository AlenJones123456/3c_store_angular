import { TestBed } from '@angular/core/testing';

import { TransRecService } from './trans-rec.service';

describe('TransRecService', () => {
  let service: TransRecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransRecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
