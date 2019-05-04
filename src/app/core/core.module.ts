import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { PagerService } from '../shared/services/pager/pager.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [PagerService]
})
export class CoreModule { }
