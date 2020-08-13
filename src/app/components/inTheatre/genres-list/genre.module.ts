import {NgModule} from '@angular/core';
import {GenresListComponent} from './genres-list.component';
import {SharedModule} from '../../../services/shared/shared.module';
import {GenreListRoutingModule} from './genre-list-routing.module';


@NgModule({
  declarations: [GenresListComponent],
  imports: [SharedModule, GenreListRoutingModule]
})
export class GenreModule {
}
