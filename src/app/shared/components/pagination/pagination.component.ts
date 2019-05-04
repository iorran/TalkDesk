import { Pager } from './../../models/pager.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {  
  @Input() page: Pager;  

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  } 

  onPage(n: number): void { 
    this.goPage.emit(n);
  }

  onPrev(): void {  
    this.goPrev.emit(true);
  }

  onNext(): void {  
    this.goNext.emit(true);
  } 
}
