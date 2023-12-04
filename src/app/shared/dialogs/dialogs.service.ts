import { Injectable } from '@angular/core';

import {MatConfirmDialogComponent} from "./mat-confirm-dialog/mat-confirm-dialog.component";

import {MatInfoDialogComponent} from "./mat-info-dialog/mat-info-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Injectable({
  providedIn : 'root'
})
export class DialogsService {

  constructor(
    private dialog : MatDialog
  ) { }

  openConfirmDialog(){
    return this.dialog.open(MatConfirmDialogComponent,{
      disableClose:false,
    })
  }
  openInfoDialog(message:string){
    return this.dialog.open(MatInfoDialogComponent,{
      disableClose:false,
      data:{
        message:message
      }
    })
  }
}
