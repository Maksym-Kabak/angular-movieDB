import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AllMoviesComponent} from './all-movies.component';

const routes: Routes = [{path: '', component: AllMoviesComponent}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AllMoviesRoutingModule {
}
