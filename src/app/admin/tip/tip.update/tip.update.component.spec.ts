import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipUpdateComponent } from './tip.update.component';

describe('TipUpdateComponent', () => {
  let component: TipUpdateComponent;
  let fixture: ComponentFixture<TipUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
