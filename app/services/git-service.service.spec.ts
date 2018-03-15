import { TestBed, inject } from '@angular/core/testing';

import { GitServiceService } from './git-service.service';

describe('GitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitServiceService]
    });
  });

  it('should be created', inject([GitServiceService], (service: GitServiceService) => {
    expect(service).toBeTruthy();
  }));
});
