import { Injectable, OnInit } from '@angular/core';
import ArticleJson from '../articles.json';

enum Category {
  Country,
  Continent,
  City,
  Area,
  Story,
  Volunteering,
}

export type Article = {
  name: string;
  short: string;
  country: string;
  continent: string;
  city: string;
  tags: string[];
  router: string;
  article: string;
  author: string;
  publishDate: Date;
  category: Category;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements OnInit {



  constructor() {}

  getSuggestedContent(articleName: string): Article[] {
    var suggestions: Article[]
    var suggestionFor: Article = this.articles.find(article => article.name === articleName)!
    suggestions = this.articles.filter(article => suggestionFor.city !== "" && article.city === suggestionFor.city && article.name !== suggestionFor.name)
    if (suggestions.length < 5) {
      this.articles.filter(article => suggestionFor.country !== "" && article.country === suggestionFor.country && article.name !== suggestionFor.name && suggestions.find(suggestion => suggestion.name === article.name) === undefined)
        .forEach(result => suggestions.push(result))
    } if (suggestions.length < 5) {
      this.articles.filter(article => suggestionFor.continent !== "" && article.continent === suggestionFor.continent && article.name !== suggestionFor.name && suggestions.find(suggestion => suggestion.name === article.name) === undefined)
        .forEach(result => suggestions.push(result))
    } if (suggestions.length < 5) {
      this.articles.filter(article => article.continent === "Central America" && suggestionFor.continent === "South America" || article.continent === "South America" && suggestionFor.continent === "Central America" && article.name !== suggestionFor.name && suggestions.find(suggestion => suggestion.name === article.name) === undefined)
        .forEach(result => suggestions.push(result))
    }

    return suggestions.length <= 5 ? suggestions : suggestions.slice(0, 5)
  }

  ngOnInit(): void {
  }

  articles = (ArticleJson as unknown as Article[])



}
