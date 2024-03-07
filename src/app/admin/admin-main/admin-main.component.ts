import {Component, signal} from '@angular/core';
import {Router} from "@angular/router";
import {routing} from "../../routing";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent {


  constructor() {
  }


  protected readonly routing = routing;
}
