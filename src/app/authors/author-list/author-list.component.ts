import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../authors.model';
import { AuthorDetailComponent } from "../author-detail/author-detail.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-author-list',
  template: `<app-author-detail
    *ngFor="let author of authors"
    [author]="author" (select)="onSelected($event)" (delete)="onDeleted($event)"
  ></app-author-detail>
  <br>
  <div>
    Current selected Authors: {{currentAuthor.firstName}} {{currentAuthor.lastName}}
  </div>`,
  styles: [``],
  imports: [AuthorDetailComponent, NgFor],
})

export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];
  constructor() {}
  ngOnInit() {}

  onSelected(selectedAuthor: Author){
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(id: number){
    this.authors = this.authors.filter(authors=>{
      return authors.id !== id;
    })

    if(this.currentAuthor.id === id){
      this.currentAuthor = this.authors[0]
    }
  }
}