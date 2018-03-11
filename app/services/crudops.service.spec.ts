import { TestBed, inject } from '@angular/core/testing';

import { CrudopsService } from './crudops.service';

describe('CrudopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudopsService]
    });
  });

  it('should be created', inject([CrudopsService], (service: CrudopsService) => {
    expect(service).toBeTruthy();
  }));
});
