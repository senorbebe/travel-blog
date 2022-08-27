import { Component, OnInit } from '@angular/core';
import { Article, ArticleService, Category } from '../service/article-service';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent implements OnInit {

  articleService: ArticleService
  articles: Article[]


  constructor(private articleServiceImport: ArticleService) {
    this.articleService = articleServiceImport
    this.articles = this.articleService.getArticlesByCategory([Category.Volunteering], 0)
  }

  ngOnInit(): void {
  }

}
