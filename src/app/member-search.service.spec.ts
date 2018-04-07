import { TestBed, inject } from '@angular/core/testing';

import { MemberSearchService } from './member-search.service';

describe('MemberSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberSearchService]
    });
  });

  it('should be created', inject([MemberSearchService], (service: MemberSearchService) => {
    expect(service).toBeTruthy();
  }));
});
