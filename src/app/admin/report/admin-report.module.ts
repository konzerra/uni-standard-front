import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminReportRoutingModule } from './admin-report-routing.module';
import {ReportUpdateComponent} from "./report.update/report.update.component";
import {ReportSaveComponent} from "./report.save/report.save.component";
import {ReportManageComponent} from "./report.manage/report.manage.component";
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import {PipesModule} from "../../_pipes/pipes.module";


@NgModule({
  declarations: [
    ReportUpdateComponent,
    ReportSaveComponent,
    ReportManageComponent,
  ],
    imports: [
        CommonModule,
        AdminReportRoutingModule,
        SharedModule,
        CoreModule,
        PipesModule
    ]
})
export class AdminReportModule { }
