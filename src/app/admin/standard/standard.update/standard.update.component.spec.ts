import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardUpdateComponent } from './standard.update.component';

describe('StandardUpdateComponent', () => {
  let component: StandardUpdateComponent;
  let fixture: ComponentFixture<StandardUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
