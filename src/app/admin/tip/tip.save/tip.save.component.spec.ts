import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipSaveComponent } from './tip.save.component';

describe('TipSaveComponent', () => {
  let component: TipSaveComponent;
  let fixture: ComponentFixture<TipSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
