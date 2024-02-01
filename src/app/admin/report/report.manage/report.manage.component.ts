import {Component, OnInit} from '@angular/core';
import { Report} from "../../../domain/report/Report";
import {Standard, StandardPage, StandardReportsPage} from "../../../domain/standard/Standard";
import {StandardService} from "../../../domain/standard/standard.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../domain/api/PageRequestDto";
import {PageEvent} from "@angular/material/paginator";
import {routing} from "../../../routing";
import {ReportService} from "../../../domain/report/report.service";

@Component({
  selector: 'app-report.manage',
  templateUrl: './report.manage.component.html',
  styleUrl: './report.manage.component.scss'
})
export class ReportManageComponent implements OnInit{

  constructor(
    private standardService: StandardService,
    private reportService: ReportService,
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
  modelPage: StandardReportsPage = {
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
    this.standardService.getPaginatedWithReports(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
          console.log(modelPage)
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{

        }
      })
  }

  onPageChange($event:PageEvent) {
    this.pageRequestDto.page = $event.pageIndex
    this.pageRequestDto.size = $event.pageSize
    this.standardService.getPaginatedWithReports(this.pageRequestDto).subscribe(
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

  onAddReport(sIndex: number) {
    this.router.navigate(
      [routing.admin.report.save],
      {queryParams: {id: JSON.stringify(sIndex)}}
    )
  }

  onUpdate(id: number) {
    this.router.navigate([routing.admin.report.update],
      {queryParams: {id: id}})
  }

  onDelete(id: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(v)=>{
        this.reportService.deleteById(id.toString()).subscribe({
          error:(err)=> this.dialogsService.openInfoDialog(err),
          complete:()=> this.dialogsService.openInfoDialog("Успешно удалено")
        })
      }
    })

  }
}
