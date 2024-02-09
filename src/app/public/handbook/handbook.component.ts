import {Component, OnInit} from '@angular/core';
import {Tip} from "../../domain/tip/Tip";
import {TipService} from "../../domain/tip/tip.service";

@Component({
  selector: 'app-handbook',
  templateUrl: './handbook.component.html',
  styleUrl: './handbook.component.scss'
})
export class HandbookComponent implements OnInit{
  tips: Tip[] = []
  constructor(
    private tipService: TipService
  ) {
  }
  ngOnInit(): void {
    this.tipService.getAll().subscribe({
      next:(v)=>this.tips = v
    })
  }

}
