import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TvShowsComponent} from './tv-shows.component';

const routes: Routes = [{path: '', component: TvShowsComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TvShowsRoutingModule {
}
