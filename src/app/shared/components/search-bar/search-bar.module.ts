import { NgModule } from '@angular/core'; 
import { SharedModule } from '../../shared.module';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    SharedModule
  ],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
