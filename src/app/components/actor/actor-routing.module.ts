import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActorComponent} from './actor.component';

const routers: Routes = [{path: '', component: ActorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class ActorRoutingModule {
}
