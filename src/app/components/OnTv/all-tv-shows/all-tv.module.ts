import {NgModule} from '@angular/core';
import {AllTvShowsComponent} from './all-tv-shows.component';
import {AllTvRoutingModule} from './all-tv-routing.module';
import {SharedModule} from '../../../services/shared/shared.module';


@NgModule({
  declarations: [AllTvShowsComponent],
  imports: [SharedModule, AllTvRoutingModule]
})
export class AllTvModule {
}
