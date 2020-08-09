import { TestBed } from '@angular/core/testing';

import { GetCharacteresService } from './get-characteres.service';

describe('GetCharacteresService', () => {
  let service: GetCharacteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCharacteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
