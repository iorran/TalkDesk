import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core'; 

import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    SharedModule
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
