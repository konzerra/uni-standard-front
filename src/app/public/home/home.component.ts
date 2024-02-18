import {Component, HostListener, OnInit} from '@angular/core';
import {Markdown} from "../../domain/markdown/Markdown";
import {AppApi} from "../../domain/api/AppApi";
import {MarkdownService} from "../../domain/markdown/markdown.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent implements OnInit{
  slidesPerView:number = 3;
  screenWidth!: number;
  pages: Markdown[] = [];
  constructor(
    private markdownService: MarkdownService
  ) {
  }

  ngOnInit(): void {
    this.markdownService.getAll().subscribe({
      next:(v)=> {
        this.pages = v
      }
    })
  }


  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 320 && this.screenWidth <= 540){
      this.slidesPerView = 1;
    }
    else if(this.screenWidth >= 540 && this.screenWidth <= 992){
      this.slidesPerView = 2;
    }
    else if(this.screenWidth >= 992 && this.screenWidth <= 1200){
      this.slidesPerView = 3;
    }
  }

  protected readonly AppApi = AppApi;
}
