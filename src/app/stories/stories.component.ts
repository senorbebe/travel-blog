import { Component, OnInit } from '@angular/core';
import { Article, ArticleService, Category } from '../service/article-service';



@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  articleService: ArticleService
  places: Article[] = []
  volunteering: Article[] = []

  constructor(private articleServiceDetails: ArticleService) {
    this.articleService = articleServiceDetails
  }

  ngOnInit(): void {
    this.places = this.articleService.getArticlesByCategory([Category.City, Category.Country, Category.Continent, Category.Area], 6)
    this.volunteering = this.articleService.getArticlesByCategory([Category.Volunteering], 6)
  }


}
