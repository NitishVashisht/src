import { TestBed, inject } from '@angular/core/testing';

import { CliserviceService } from './cliservice.service';

describe('CliserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CliserviceService]
    });
  });

  it('should be created', inject([CliserviceService], (service: CliserviceService) => {
    expect(service).toBeTruthy();
  }));
});
