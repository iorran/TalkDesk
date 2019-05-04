import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit { 
  @Output() searchEvent = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

  public onChange(e: any) {
    this.searchEvent.emit(e.target.value.toLowerCase());
  }

}
