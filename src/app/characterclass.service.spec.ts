import { TestBed, inject } from '@angular/core/testing';

import { CharacterclassService } from './characterclass.service';

describe('CharacterclassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterclassService]
    });
  });

  it('should be created', inject([CharacterclassService], (service: CharacterclassService) => {
    expect(service).toBeTruthy();
  }));
});
