import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  public categories$: Observable<Set<any>>;
  public active: string;
  
  @Output() filter = new EventEmitter<string>();

  constructor(private _homeService: HomeService) { }

  public ngOnInit() {
    this.getCategories();
  }

  private getCategories() {
    this.categories$ = this._homeService.findAll().pipe( 
      map(data => data.reduce( 
          (acc, cur) => new Set([...Array.from(acc), ...cur.categories].sort((a, b) => a.localeCompare(b))), new Set<any>() 
        )
      )
    ); 
  }

  public doFilter(param: string){ 
    if(this.active === param ) {
      this.active = undefined;
      this.filter.emit(undefined);
    } else {
      this.active = param;
      this.filter.emit(param);
    }
  }

  public isActive(param: string){
    return this.active === param;
  }
}