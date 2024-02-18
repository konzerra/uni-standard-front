import {Component, OnInit} from '@angular/core';
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../domain/api/PageRequestDto";
import {ModelPageI} from "../../../_generic/ModelPageI";
import {Tip} from "../../../domain/tip/Tip";
import {routing} from "../../../routing";
import {PageEvent} from "@angular/material/paginator";
import {UserService} from "../../../domain/user/user.service";
import {User} from "../../../domain/user/User";

@Component({
  selector: 'app-user.manage',
  templateUrl: './user.manage.component.html',
  styleUrl: './user.manage.component.scss'
})
export class UserManageComponent implements OnInit{

  constructor(
    private userService: UserService,
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
  modelPage: ModelPageI<User> = {
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
    this.userService.getPaginated(this.pageRequestDto).subscribe(
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
    this.router.navigate([routing.admin.user.save])
  }

  onDeleteClicked(model: Tip, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value: any)=>{
        if(value){
          this.userService.deleteById(model.id.toString()).subscribe({
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
      [routing.admin.user.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }
  onPageChange($event:PageEvent) {
    this.pageRequestDto.page = $event.pageIndex
    this.pageRequestDto.size = $event.pageSize
    this.userService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        }
      })
  }
}
