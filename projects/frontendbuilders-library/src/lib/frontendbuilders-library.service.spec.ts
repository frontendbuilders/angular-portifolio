import { TestBed, inject } from '@angular/core/testing';

import { FrontendbuildersLibraryService } from './frontendbuilders-library.service';

describe('FrontendbuildersLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrontendbuildersLibraryService]
    });
  });

  it('should be created', inject([FrontendbuildersLibraryService], (service: FrontendbuildersLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
