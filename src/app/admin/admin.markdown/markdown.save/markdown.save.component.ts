import { Component } from '@angular/core';
import {TipSaveForm} from "../../tip/tip.save/tip.save.form";
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {TipService} from "../../../domain/tip/tip.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {routing} from "../../../routing";
import {MarkdownSaveForm} from "./markdown.save.form";
import {MarkdownService} from "../../../domain/markdown/markdown.service";


@Component({
  selector: 'app-markdown.save',
  templateUrl: './markdown.save.component.html',
  styleUrl: './markdown.save.component.scss'
})
export class MarkdownSaveComponent {
  saveDisabled: boolean = false;
  form = new MarkdownSaveForm()
  matcher = new CustomErrorStateMatcher();

  constructor(
    private markdownService: MarkdownService,
    private dialogsService: DialogsService,
    private router: Router
  ) {
  }

  onSave() {
    this.saveDisabled = true
    if(!this.form.valid()){
      this.dialogsService.openInfoDialog("Форма заполнена некорректно")
      this.saveDisabled = false
      return
    }
    this.markdownService.save(this.form.getDto(), this.form.image).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.saveDisabled = false
        this.dialogsService.openInfoDialog("Успешно сохранено")
        this.router.navigate([routing.admin.markdown.manage])
      }
    })
  }
  onImageChange($event: Event) {
    this.form.image = ($event.target as HTMLInputElement).files?.[0] ?? null;
    const reader = new FileReader();
    reader.onload = () => {
      this.form.localImageURL = reader.result as string || null;
    };
    if(this.form.image != null)
      reader.readAsDataURL(this.form.image);
  }
  onCancel() {
    this.router.navigate([routing.admin.markdown.manage])
  }
}
