import {NgModule} from '@angular/core';
import {AllMoviesRoutingModule} from './all-movies-routing.module';
import {AllMoviesComponent} from './all-movies.component';
import {SharedModule} from '../../../services/shared/shared.module';


@NgModule({
  declarations: [AllMoviesComponent],
  imports: [SharedModule, AllMoviesRoutingModule],
})
export class AllMoviesModule {
}
