import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStandardSaveComponent } from './admin-standard-save.component';

describe('AdminStandardSaveComponent', () => {
  let component: AdminStandardSaveComponent;
  let fixture: ComponentFixture<AdminStandardSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStandardSaveComponent]
    });
    fixture = TestBed.createComponent(AdminStandardSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
