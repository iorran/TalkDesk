import { PaginationModule } from './../shared/components/pagination/pagination.module';
import { NgModule } from '@angular/core'; 

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component'; 
import { AppsListComponent } from './apps-list/apps-list.component';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './shared/services/home.service';
import { SearchBarModule } from '../shared/components/search-bar/search-bar.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
  declarations: [HomeComponent, AppsListComponent, CategoriesListComponent],
  imports: [ 
    HomeRoutingModule,
    SharedModule,
    PaginationModule, 
    SearchBarModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
