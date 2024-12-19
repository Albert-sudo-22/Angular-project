import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors.model';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-author-detail',
  imports:[CommonModule],
  template: `
  @if (author) {
    <div>
      <br>
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button (click)="select.emit(author)">Select</button>
      <button (click)="delete.emit(author.id)">x</button>
      <br>
    </div>}
  `,
  styles: [``],
})

export class AuthorDetailComponent implements OnInit {
  @Input() author!: Author;
  @Output() delete = new EventEmitter<number>();
  @Output() select = new EventEmitter<Author>();
  constructor() {}
  ngOnInit() {}
}