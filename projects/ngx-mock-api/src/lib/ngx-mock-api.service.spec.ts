import { TestBed } from '@angular/core/testing';

import { NgxMockApiService } from './ngx-mock-api.service';

describe('NgxMockApiService', () => {
  let service: NgxMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
