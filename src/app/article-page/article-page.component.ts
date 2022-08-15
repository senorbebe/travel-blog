import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  suggestedContent: {name: string, short: string}[] = [
    {'name': 'Colombia', 'short': 'co'},
    {'name': 'Costa Rica', 'short': 'cr'},
    {'name': 'Spain', 'short': 'co'},
    {'name': 'Morocco', 'short': 'cr'},
    {'name': 'India', 'short': 'co'},

  ];

}
