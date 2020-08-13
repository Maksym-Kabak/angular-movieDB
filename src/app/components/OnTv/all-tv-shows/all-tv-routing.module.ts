import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AllTvShowsComponent} from './all-tv-shows.component';

const routes: Routes = [{path: '', component: AllTvShowsComponent}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AllTvRoutingModule {
}
