import { TestBed } from '@angular/core/testing';

import { DentalServiceService } from './dental-service.service';

describe('DentalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DentalServiceService = TestBed.get(DentalServiceService);
    expect(service).toBeTruthy();
  });
});
