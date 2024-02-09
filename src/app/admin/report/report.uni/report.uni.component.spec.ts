import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUniComponent } from './report.uni.component';

describe('ReportUniComponent', () => {
  let component: ReportUniComponent;
  let fixture: ComponentFixture<ReportUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportUniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
