import { Component, OnInit } from '@angular/core';
import { Article, ArticleService, Category } from '../service/article-service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  articleService: ArticleService
  articles: Article[]


  constructor(private articleServiceImport: ArticleService) {
    this.articleService = articleServiceImport
    this.articles = this.articleService.getArticlesByCategory([Category.Country, Category.City, Category.Continent, Category.Area], 0)
  }
  ngOnInit(): void {
  }

}
