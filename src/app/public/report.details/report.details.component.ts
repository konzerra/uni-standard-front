import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicViewService} from "../public.view.service";
import {Report} from "../../domain/report/Report";
import {Router} from "@angular/router";
import {routing} from "../../routing";

@Component({
  selector: 'app-report.details',
  templateUrl: './report.details.component.html',
  styleUrl: './report.details.component.scss'
})
export class ReportDetailsComponent {

  report!: Report
  groups = [
    {
      id: "group1",
      name: "Group 1",
      evaluations: [
        { id: "1" }
      ]
    },
    {
      id: "group2",
      name: "Group 2",
      evaluations: [
        { id: "2" },
        { id: "3" }
      ]
    },
    // Add more groups as needed
  ];
  constructor(
    private viewService: PublicViewService,
    private router: Router
  ) {
    if(this.viewService.selectedReport){
      this.report = this.viewService.selectedReport
    }else{
      this.router.navigate([routing.public.main])
    }

  }

  protected readonly onkeypress = onkeypress;
}
