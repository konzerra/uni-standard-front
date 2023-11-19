import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStandardMainComponent } from './admin-standard-main.component';

describe('AdminStandardMainComponent', () => {
  let component: AdminStandardMainComponent;
  let fixture: ComponentFixture<AdminStandardMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStandardMainComponent]
    });
    fixture = TestBed.createComponent(AdminStandardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
