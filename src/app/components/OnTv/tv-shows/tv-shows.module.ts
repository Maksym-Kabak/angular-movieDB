import {NgModule} from '@angular/core';
import {TvShowsComponent} from './tv-shows.component';
import {TvShowsRoutingModule} from './tv-shows-routing.module';
import {SharedModule} from '../../../services/shared/shared.module';


@NgModule({
  declarations: [TvShowsComponent],
  imports: [SharedModule, TvShowsRoutingModule]
})
export class TvShowsModule {
}
