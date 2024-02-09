import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../domain/api/PageRequestDto";
import {routing} from "../../../routing";
import {TipService} from "../../../domain/tip/tip.service";
import {ModelPageI} from "../../../_generic/ModelPageI";
import {Tip} from "../../../domain/tip/Tip";

@Component({
  selector: 'admin-tip.manage',
  templateUrl: './tip.manage.component.html',
  styleUrl: './tip.manage.component.scss'
})
export class TipManageComponent {

  constructor(
    private tipService: TipService,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {

  }

  pageRequestDto: PageRequestDto = {
    page: 0,
    size: 10,
    sort: [
      {
        property : "id",
        direction: "desc"
      }
    ]
  }
  modelPage: ModelPageI<Tip> = {
    content: [],
    empty: true,
    first: true,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
  }
  pageSizeOptions = [ 10, 25, 100];

  ngOnInit(): void {
    this.tipService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{

        }
      })
  }



  onAddClicked() {
    this.router.navigate([routing.admin.tip.save])
  }

  onDeleteClicked(model: Tip, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value: any)=>{
        if(value){
          this.tipService.deleteById(model.id.toString()).subscribe({
            complete:()=>{
              this.dialogsService.openInfoDialog("Успешно удалено")
              this.modelPage.content.splice(index,1)
            },
            error:(err)=>{
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    })
  }
  onEdit(model: Tip) {
    this.router.navigate(
      [routing.admin.tip.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }
  onPageChange($event:PageEvent) {
    this.pageRequestDto.page = $event.pageIndex
    this.pageRequestDto.size = $event.pageSize
    this.tipService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        }
      })
  }
}
