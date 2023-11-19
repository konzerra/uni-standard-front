import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStandardUpdateComponent } from './admin-standard-update.component';

describe('AdminStandardUpdateComponent', () => {
  let component: AdminStandardUpdateComponent;
  let fixture: ComponentFixture<AdminStandardUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStandardUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminStandardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
