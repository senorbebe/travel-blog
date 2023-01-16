import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article, ArticleService } from '../service/article-service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {


  router: Router;
  suggestions: Article[] = []


  articleService: ArticleService

  constructor(private articleServiceDetails: ArticleService, private angularRouter: Router) {
    this.articleService = articleServiceDetails
    this.router = angularRouter
  }

  ngOnInit(): void {
    this.getSuggestions()
  }

  getSuggestions(): Article[] {
    console.log('suggestions: ', this.articleService.getSuggestedContent(this.getArticle().name))
    return this.articleService.getSuggestedContent(this.getArticle().name)
  }

  getArticle(): Article {
    console.log(this.articleService.articles.find(article => '/articles/' + this.formatRouting(article.country) + '/' + article.router === this.router.url))
   return this.articleService.articles.find(article => '/articles/' + this.formatRouting(article.country) + '/' + article.router === this.router.url)!
  }

  formatRouting(route: string): string {
    console.log(route.toLowerCase().replace(/\s/g, "-"))
    return route.toLowerCase().replace(/\s/g, "-")
  }

}
