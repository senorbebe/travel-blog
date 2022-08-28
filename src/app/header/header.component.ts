import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent {

  faBars = faBars;
  faClose = faXmark;
  fasearch = faMagnifyingGlass

  menuOpen:boolean = false;
  searchOpen: boolean = false

  router: Router;


  @Output() buttonPressed = new EventEmitter<boolean>();

  navToggele() {
    this.menuOpen = !this.menuOpen;
  }

  searchToggle() {
    this.searchOpen = !this.searchOpen
  }

  constructor(private angularRouter: Router) {
    this.router = angularRouter;
  }

}
