import { TestBed } from '@angular/core/testing';

import { ColaboradorServiceService } from './colaborador-service.service';

describe('ColaboradorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColaboradorServiceService = TestBed.get(ColaboradorServiceService);
    expect(service).toBeTruthy();
  });
});
