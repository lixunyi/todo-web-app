import { TestBed } from '@angular/core/testing';

import { CategoryApiClientService } from './category-api-client.service';

describe('CategoryApiClientService', () => {
  let service: CategoryApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
