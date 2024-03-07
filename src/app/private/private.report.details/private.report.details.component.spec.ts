import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateReportDetailsComponent } from './private.report.details.component';

describe('PrivateReportDetailsComponent', () => {
  let component: PrivateReportDetailsComponent;
  let fixture: ComponentFixture<PrivateReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateReportDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
