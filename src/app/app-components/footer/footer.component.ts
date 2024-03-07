import {Component, OnInit} from '@angular/core';
import {Markdown} from "../../domain/markdown/Markdown";
import {MarkdownService} from "../../domain/markdown/markdown.service";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {routing} from "../../routing";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  pages: Markdown[] = []

  constructor(
    private markdownService: MarkdownService,
    private dialogsService: DialogsService
  ) {
  }

  ngOnInit(): void {
    this.markdownService.getAll().subscribe({
      next:(v)=>this.pages=v,
      error:(err)=>this.dialogsService.openInfoDialog("Сервер не работает сейчас")
    })
  }

  protected readonly routing = routing;
}
