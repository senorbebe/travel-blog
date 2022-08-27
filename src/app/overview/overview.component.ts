import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../service/article-service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() {}



  ngOnInit(): void {
  }

  @Input() articles: Article[] = []
  @Input() title: string = 'Places'

}
