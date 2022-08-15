import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-hero',
  templateUrl: './video-hero.component.html',
  styleUrls: ['./video-hero.component.css']
})
export class VideoHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() videoName: string = ''

}
