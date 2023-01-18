import { TestBed } from '@angular/core/testing';

import { NgxCustomPipeService } from './ngx-custom-pipe.service';

describe('NgxCustomPipeService', () => {
  let service: NgxCustomPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCustomPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
