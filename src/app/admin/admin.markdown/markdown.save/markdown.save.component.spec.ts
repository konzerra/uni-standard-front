import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownSaveComponent } from './markdown.save.component';

describe('MarkdownSaveComponent', () => {
  let component: MarkdownSaveComponent;
  let fixture: ComponentFixture<MarkdownSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkdownSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
