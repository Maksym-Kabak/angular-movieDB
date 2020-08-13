import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MovieComponent} from './components/inTheatre/movie/movie.component';
import {ActorComponent} from './components/actor/actor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'all-movies',
    loadChildren: () => import('./components/inTheatre/all-movies/all-movies.module').then(
      (m) => m.AllMoviesModule),
  },
  {
    path: 'all-tv-shows',
    loadChildren: () => import('./components/OnTv/all-tv-shows/all-tv.module').then(
      (m) => m.AllTvModule
    )
  },
  {
    path: 'movie/:id', component: MovieComponent
  },
  {
    path: 'tv-show/:id',
    loadChildren: () => import('./components/OnTv/tv-shows/tv-shows.module').then(
      (m) => m.TvShowsModule
    )
  },
  {
    path: 'genres',
    loadChildren: () => import('./components/inTheatre/genres-list/genre.module').then(
      (m) => m.GenreModule
    )
  },
  {
    path: 'genres/:id/:name',
    loadChildren: () => import('./components/inTheatre/genres/genres.module').then(
      (m) => m.GenresModule
    )
  },
  {
    path: 'actor/:id',
    loadChildren: () => import('./components/actor/actor.module').then(
      (m) => m.ActorModule
    )
  },
  {
    path: 'genres-tv/:id/:name',
    loadChildren: () => import('./components/inTheatre/genres-list/genre.module').then(
      (m) => m.GenreModule
    )
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
