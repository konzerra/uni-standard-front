import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSaveComponent } from './report.save.component';

describe('ReportSaveComponent', () => {
  let component: ReportSaveComponent;
  let fixture: ComponentFixture<ReportSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
