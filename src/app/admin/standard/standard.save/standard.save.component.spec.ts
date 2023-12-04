import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSaveComponent } from './standard.save.component';

describe('StandardSaveComponent', () => {
  let component: StandardSaveComponent;
  let fixture: ComponentFixture<StandardSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
