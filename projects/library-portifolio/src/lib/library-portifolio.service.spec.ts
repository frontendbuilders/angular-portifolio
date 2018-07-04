import { TestBed, inject } from '@angular/core/testing';

import { LibraryPortifolioService } from './library-portifolio.service';

describe('LibraryPortifolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryPortifolioService]
    });
  });

  it('should be created', inject([LibraryPortifolioService], (service: LibraryPortifolioService) => {
    expect(service).toBeTruthy();
  }));
});
