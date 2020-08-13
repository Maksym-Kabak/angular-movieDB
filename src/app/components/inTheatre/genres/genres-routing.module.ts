import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenresComponent} from './genres.component';

const routes: Routes = [{path: '', component: GenresComponent}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GenresRoutingModule {
}
