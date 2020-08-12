import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AllMoviesComponent} from './components/inTheatre/all-movies/all-movies.component';
import {GenresComponent} from './components/inTheatre/genres/genres.component';
import {GenresListComponent} from './components/inTheatre/genres-list/genres-list.component';
import {MovieComponent} from './components/inTheatre/movie/movie.component';
import {ActorComponent} from './components/actor/actor.component';
import {AllTvShowsComponent} from './components/OnTv/all-tv-shows/all-tv-shows.component';
import {TvShowsComponent} from './components/OnTv/tv-shows/tv-shows.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'all-movies', component: AllMoviesComponent},
  {path: 'all-tv-shows', component: AllTvShowsComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'tv-show/:id', component: TvShowsComponent},
  {path: 'genres', component: GenresListComponent},
  {path: 'genres/:id/:name', component: GenresComponent},
  {path: 'actor/:id', component: ActorComponent},
  {path: 'genres-tv/:id/:name', component: GenresListComponent},
];

