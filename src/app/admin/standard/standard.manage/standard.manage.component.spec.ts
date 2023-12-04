import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardManageComponent } from './standard.manage.component';

describe('StandardManageComponent', () => {
  let component: StandardManageComponent;
  let fixture: ComponentFixture<StandardManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
