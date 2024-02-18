import {Component, signal} from '@angular/core';
import {Router} from "@angular/router";
import {routing} from "../../routing";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent {


  constructor(
      private router: Router
  ) {
  }

  onCriteria() {
    this.router.navigate([routing.admin.standard.manage])
  }

  onReports() {
    this.router.navigate([routing.admin.report.manage])
  }

  onTips() {
    this.router.navigate([routing.admin.tip.manage])
  }

  onPages() {
    this.router.navigate([routing.admin.markdown.manage])
  }
}
