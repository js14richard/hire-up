import { TestBed } from '@angular/core/testing';

import { RecruiterRegistrationService } from './recruiter-registration.service';

describe('RecruiterRegistrationService', () => {
  let service: RecruiterRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
