import {Component, OnInit} from '@angular/core';
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {TipService} from "../../../domain/tip/tip.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {routing} from "../../../routing";
import {TipUpdateForm} from "./tip.update.form";

@Component({
  selector: 'app-tip.update',
  templateUrl: './tip.update.component.html',
  styleUrl: './tip.update.component.scss'
})
export class TipUpdateComponent implements OnInit{
  updateDisabled: boolean = false;
  form = new TipUpdateForm()
  matcher = new CustomErrorStateMatcher();

  constructor(
    private tipService: TipService,
    private dialogsService: DialogsService,
    private router: Router,
    protected route: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.tipService.getById(param["id"]).subscribe({
            next:(v)=>{
              this.form.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([routing.admin.tip.manage])
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
    this.tipService.update(this.form.getDto()).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.updateDisabled = false
        this.dialogsService.openInfoDialog("Успешно сохранено")
        this.router.navigate([routing.admin.tip.manage])
      }
    })
  }

  onCancel() {
    this.router.navigate([routing.admin.tip.manage])
  }
}
