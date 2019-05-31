import { TestBed } from '@angular/core/testing';

import { PokeserviceService } from './pokeservice.service';

describe('PokeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeserviceService = TestBed.get(PokeserviceService);
    expect(service).toBeTruthy();
  });
});
