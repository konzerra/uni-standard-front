
import {FormControl, Validators} from "@angular/forms";
import {MarkdownSaveDto} from "../../../domain/markdown/dto/MarkdownSaveDto";


export class MarkdownSaveForm {
  id = new FormControl<string | null>(null, [Validators.required])
  name = new FormControl<string | null>(null, [Validators.required])
  priority = new FormControl<number | null>(null, [Validators.required])
  source = new FormControl<string | null>(null, [Validators.required])
  image:File | null = null
  localImageURL: string | null = null;
  getDto():MarkdownSaveDto{
    return {
      id: this.id.value || "",
      name: this.name.value || "",
      priority: this.priority.value || 0,
      source: this.source.value || "",
    }
  }
  valid(): boolean {
    return this.id.valid &&
      this.name.valid &&
      this.priority.valid &&
      this.source.valid &&
      this.image != null
  }
}

