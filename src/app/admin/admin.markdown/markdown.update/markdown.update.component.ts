import {Component, OnInit} from '@angular/core';
import {TipUpdateForm} from "../../tip/tip.update/tip.update.form";
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {TipService} from "../../../domain/tip/tip.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {routing} from "../../../routing";
import {MarkdownUpdateForm} from "./markdown.update.form";
import {MarkdownService} from "../../../domain/markdown/markdown.service";
import {AppApi} from "../../../domain/api/AppApi";

@Component({
  selector: 'app-markdown.update',
  templateUrl: './markdown.update.component.html',
  styleUrl: './markdown.update.component.scss'
})
export class MarkdownUpdateComponent implements OnInit{
  updateDisabled: boolean = false;
  form = new MarkdownUpdateForm()
  matcher = new CustomErrorStateMatcher();

  constructor(
    private markdownService: MarkdownService,
    private dialogsService: DialogsService,
    private router: Router,
    protected route: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.markdownService.getById(param["id"]).subscribe({
            next:(v)=>{
              this.form.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([routing.admin.markdown.manage])
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    )
  }


  onUpdate() {
    this.updateDisabled = true
    if(!this.form.valid()){
      this.dialogsService.openInfoDialog("Форма заполнена некорректно")
      this.updateDisabled = false
      return
    }
    this.markdownService.update(this.form.getDto(), this.form.image).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.updateDisabled = false
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

  protected readonly AppApi = AppApi;
}
