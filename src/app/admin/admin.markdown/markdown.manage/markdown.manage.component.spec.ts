import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownManageComponent } from './markdown.manage.component';

describe('MarkdownManageComponent', () => {
  let component: MarkdownManageComponent;
  let fixture: ComponentFixture<MarkdownManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkdownManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
