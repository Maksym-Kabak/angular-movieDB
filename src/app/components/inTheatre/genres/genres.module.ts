import { NgModule } from '@angular/core';
import {GenresComponent} from './genres.component';
import {SharedModule} from '../../../services/shared/shared.module';
import {GenresRoutingModule} from './genres-routing.module';



@NgModule({
  declarations: [GenresComponent],
  imports: [SharedModule, GenresRoutingModule
  ]
})
export class GenresModule { }
