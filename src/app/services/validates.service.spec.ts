import { TestBed } from '@angular/core/testing';

import { ValidatesService } from './validates.service';

describe('ValidatesService', () => {
  let service: ValidatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
