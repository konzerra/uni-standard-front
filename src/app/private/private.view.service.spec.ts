import { TestBed } from '@angular/core/testing';

import { PrivateViewService } from './private.view.service';

describe('PrivateViewService', () => {
  let service: PrivateViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
