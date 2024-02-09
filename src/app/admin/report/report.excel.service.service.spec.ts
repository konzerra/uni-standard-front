import { TestBed } from '@angular/core/testing';

import { ReportExcelService } from './report-excel.service';

describe('ReportExcelServiceService', () => {
  let service: ReportExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
