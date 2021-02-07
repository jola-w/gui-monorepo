import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'ev-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  faSearch = faSearch;

  @Output() cityToSearch = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchWeatcher(city: string) {
    this.cityToSearch.emit(city);
  }

}
