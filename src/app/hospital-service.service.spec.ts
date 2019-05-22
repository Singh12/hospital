import { TestBed, inject } from '@angular/core/testing';

import { HospitalServiceService } from './hospital-service.service';

describe('HospitalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalServiceService]
    });
  });

  it('should be created', inject([HospitalServiceService], (service: HospitalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
