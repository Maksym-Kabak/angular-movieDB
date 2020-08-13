import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActorComponent} from './actor.component';
import {SharedModule} from '../../services/shared/shared.module';
import {ActorRoutingModule} from './actor-routing.module';


@NgModule({
  declarations: [ActorComponent],
  imports: [SharedModule, ActorRoutingModule]
})
export class ActorModule {
}
