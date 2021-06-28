import { TestBed } from '@angular/core/testing';

import { TodoApiClientService } from './todo-api-client.service';

describe('TodoApiClientService', () => {
  let service: TodoApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
