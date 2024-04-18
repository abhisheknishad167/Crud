// Angular imports
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Local imports
import {CountryListComponent} from './component/country-list/country-list.component';
import {CountryDetailsComponent} from './component/country-details/country-details.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
