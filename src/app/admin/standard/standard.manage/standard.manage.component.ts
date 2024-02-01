import {Component, OnInit} from '@angular/core';
import {StandardService} from "../../../domain/standard/standard.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../domain/api/PageRequestDto";
import {Standard, StandardPage} from "../../../domain/standard/Standard";
import {routing} from "../../../routing";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-standard.manage',
  templateUrl: './standard.manage.component.html',
  styleUrl: './standard.manage.component.scss'
})
export class StandardManageComponent implements OnInit{

  constructor(
      private standardService: StandardService,
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
  modelPage: StandardPage = {
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
    this.standardService.getPaginated(this.pageRequestDto).subscribe(
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
    this.router.navigate([routing.admin.standard.save])
  }

  onDeleteClicked(model: Standard, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value: any)=>{
        if(value){
          this.standardService.deleteById(model.id.toString()).subscribe({
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
  onEdit(model: Standard) {
    this.router.navigate(
        [routing.admin.standard.update],
        {queryParams: {id: JSON.stringify(model.id)}}
    )
  }
  onPageChange($event:PageEvent) {
    this.pageRequestDto.page = $event.pageIndex
    this.pageRequestDto.size = $event.pageSize
    this.standardService.getPaginated(this.pageRequestDto).subscribe(
        {
          next:(modelPage)=>{
            this.modelPage = modelPage
          },
          error:()=>{

          },
          complete:()=>{

          }
        })
  }


}
