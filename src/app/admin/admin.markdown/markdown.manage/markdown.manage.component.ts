import {Component, OnInit} from '@angular/core';
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../domain/api/PageRequestDto";
import {routing} from "../../../routing";
import {PageEvent} from "@angular/material/paginator";
import {MarkdownService} from "../../../domain/markdown/markdown.service";
import {MarkdownPage} from "../../../domain/markdown/MarkdownPage";
import {Markdown} from "../../../domain/markdown/Markdown";


@Component({
  selector: 'app-markdown.manage',
  templateUrl: './markdown.manage.component.html',
  styleUrl: './markdown.manage.component.scss'
})
export class MarkdownManageComponent implements OnInit{

  constructor(
    private markdownService: MarkdownService,
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
  modelPage: MarkdownPage = {
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
    this.markdownService.getPaginated(this.pageRequestDto).subscribe(
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
    this.router.navigate([routing.admin.markdown.save])
  }

  onDeleteClicked(model: Markdown, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value: any)=>{
        if(value){
          this.markdownService.deleteById(model.id).subscribe({
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
  onEdit(model: Markdown) {
    this.router.navigate(
      [routing.admin.markdown.update],
      {queryParams: {id: model.id}}
    )
  }
  onPageChange($event:PageEvent) {
    this.pageRequestDto.page = $event.pageIndex
    this.pageRequestDto.size = $event.pageSize
    this.markdownService.getPaginated(this.pageRequestDto).subscribe(
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
