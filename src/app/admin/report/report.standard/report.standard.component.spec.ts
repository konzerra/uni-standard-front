import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStandardComponent } from './report.standard.component';

describe('ReportStandardComponent', () => {
  let component: ReportStandardComponent;
  let fixture: ComponentFixture<ReportStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportStandardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
