import { map } from 'rxjs/operators';
import { Pager } from './../../shared/models/pager.model';
import { HomeService } from './../shared/services/home.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { App } from 'src/app/shared/models/app.model';
import { PagerService } from 'src/app/shared/services/pager/pager.service';

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit, OnChanges {

  public items: Array<App>;
  public itemsFiltered: Array<App>;
  public pagedItems: Array<App>;
  public pager: Pager;

  public limit: number = 3;

  @Input() category: string;

  constructor(
    private _homeService: HomeService,
    private _pagerService: PagerService
  ) {}

  public ngOnInit() {
    this.getApps();
  }

  public ngOnChanges() {  
    this.getApps();
  }

  private getApps(currentPage: number = 1) {
    this._homeService.findAll()
      .pipe(
        map(data => data.filter(data => data.categories.indexOf(this.category) !== -1 || !this.category))
      )
      .subscribe(data => {
        this.items = data;
        this.itemsFiltered = data;
        this.setPage(currentPage, data);
      });
  }

  private setPage(page: number, itens: Array<App>) {
    this.pager = this._pagerService.getPager(itens.length, page, this.limit);
    this.pagedItems = itens.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  public goPage(n: number): void {
    this.pager.currentPage = n;
    this.setPage(this.pager.currentPage, this.itemsFiltered);
  }

  public goNext(): void {
    this.pager.currentPage++;
    this.setPage(this.pager.currentPage, this.itemsFiltered);
  }

  public goPrev(): void {
    this.pager.currentPage--;
    this.setPage(this.pager.currentPage, this.itemsFiltered);
  }

  public doFilter(filter: string) {
    this.itemsFiltered = this.items.filter(data => data.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || !filter);
    this.setPage(1, this.itemsFiltered);
  }
}
