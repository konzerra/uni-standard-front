import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCalculatorDialogComponent } from './rating-calculator-dialog.component';

describe('RatingCalculatorDialogComponent', () => {
  let component: RatingCalculatorDialogComponent;
  let fixture: ComponentFixture<RatingCalculatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingCalculatorDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingCalculatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
