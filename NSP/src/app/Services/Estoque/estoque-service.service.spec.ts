import { TestBed } from '@angular/core/testing';

import { EstoqueServiceService } from './estoque-service.service';

describe('EstoqueServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstoqueServiceService = TestBed.get(EstoqueServiceService);
    expect(service).toBeTruthy();
  });
});
