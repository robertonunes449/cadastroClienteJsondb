import { TestBed } from '@angular/core/testing';

import { CepServicesService } from './cep-services.service';

describe('CepServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CepServicesService = TestBed.get(CepServicesService);
    expect(service).toBeTruthy();
  });
});
