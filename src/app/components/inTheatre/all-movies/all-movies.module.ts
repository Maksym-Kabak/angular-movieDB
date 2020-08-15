import {NgModule} from '@angular/core';
import {AllMoviesRoutingModule} from './all-movies-routing.module';
import {AllMoviesComponent} from './all-movies.component';
import {SharedModule} from '../../../services/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [AllMoviesComponent],
    imports: [SharedModule, AllMoviesRoutingModule, FormsModule, MatSelectModule, InfiniteScrollModule],
})
export class AllMoviesModule {
}
