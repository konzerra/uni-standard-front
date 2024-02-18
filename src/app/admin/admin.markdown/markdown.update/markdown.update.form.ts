
import {FormControl, Validators} from "@angular/forms";
import {MarkdownSaveDto} from "../../../domain/markdown/dto/MarkdownSaveDto";
import {MarkdownUpdateDto} from "../../../domain/markdown/dto/MarkdownUpdateDto";
import {Markdown} from "../../../domain/markdown/Markdown";


export class MarkdownUpdateForm {
  id = new FormControl<string | null>(null, [Validators.required])
  name = new FormControl<string | null>(null, [Validators.required])
  priority = new FormControl<number | null>(null, [Validators.required])
  source = new FormControl<string | null>(null, [Validators.required])
  image:File | null = null
  localImageURL: string | null = null;
  getDto():MarkdownUpdateDto{
    return {
      id: this.id.value || "",
      name: this.name.value || "",
      priority: this.priority.value || 0,
      source: this.source.value || "",
    }
  }
  setDto(markdown: Markdown){
    this.id.setValue(markdown.id)
    this.name.setValue(markdown.name)
    this.priority.setValue(markdown.priority)
    this.source.setValue(markdown.source)
    this.localImageURL = markdown.image
    console.log(this.localImageURL)
  }
  valid(): boolean {
    return this.id.valid &&
      this.name.valid &&
      this.priority.valid &&
      this.source.valid
  }
}

