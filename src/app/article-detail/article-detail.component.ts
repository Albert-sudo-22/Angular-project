import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article, ArticleService } from '../article.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})


export class ArticleDetailComponent implements OnInit {
  article$: Observable<Article | null> | undefined;
  constructor(private _route: ActivatedRoute, private _api: ArticleService) {}

  ngOnInit(): void {
    const slug = this._route.snapshot.paramMap.get('slug');
    if (slug) {
      this.article$ = this._api.getArticleBySlug(slug);
    } else {
      this.article$ = of(null); // Handle the case where slug is null
    }
  }
}