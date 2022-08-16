import { TestBed } from '@angular/core/testing';

import { ClientesServiceService } from './clientes-service.service';

describe('ClientesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientesServiceService = TestBed.get(ClientesServiceService);
    expect(service).toBeTruthy();
  });
});
