import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownUpdateComponent } from './markdown.update.component';

describe('MarkdownUpdateComponent', () => {
  let component: MarkdownUpdateComponent;
  let fixture: ComponentFixture<MarkdownUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkdownUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
