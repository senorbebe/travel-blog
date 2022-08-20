import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article-service';



@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  countriesWithFlags: {name: string, short: string}[] = [
    {'name': 'Colombia', 'short': 'co'},
    {'name': 'Costa Rica', 'short': 'cr'},
    {'name': 'Spain', 'short': 'co'},
    {'name': 'Morocco', 'short': 'cr'},
    {'name': 'India', 'short': 'co'},

  ];


  articleService: ArticleService;

  constructor(private articleServiceDetails: ArticleService) {
    this.articleService = articleServiceDetails
  }

  ngOnInit(): void {
  }



}
