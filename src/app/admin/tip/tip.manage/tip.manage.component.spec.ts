import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipManageComponent } from './tip.manage.component';

describe('TipManageComponent', () => {
  let component: TipManageComponent;
  let fixture: ComponentFixture<TipManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
