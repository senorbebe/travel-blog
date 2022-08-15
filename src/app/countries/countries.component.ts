import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() countryName: string = ""
  @Input() countryShort: string = ""

}
