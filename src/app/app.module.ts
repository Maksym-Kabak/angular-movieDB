import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {AllMoviesComponent} from './components/inTheatre/all-movies/all-movies.component';
import {PosterCardComponent} from './components/ui/poster-card/poster-card.component';
import {HomeComponent} from './components/home/home.component';
import { SearchbarComponent } from './components/home/searchbar/searchbar.component';
import {TvShowsComponent} from './components/OnTv/tv-shows/tv-shows.component';
import {ActorComponent} from './components/actor/actor.component';
import {AllTvShowsComponent} from './components/OnTv/all-tv-shows/all-tv-shows.component';
import {GenresTvComponent} from './components/OnTv/genres-tv/genres-tv.component';
import {GenresComponent} from './components/inTheatre/genres/genres.component';
import {GenresListComponent} from './components/inTheatre/genres-list/genres-list.component';
import {AppMovieDialogComponent, MovieComponent} from './components/inTheatre/movie/movie.component';
import {SearchResultsComponent} from './components/home/search-results/search-results.component';

import {OnTvService} from './services/onTv/on-tv.service';
import {MoviesService} from './services/inTheatre/movies.service';

import {appRoutes} from './app.routes';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {RatingModule} from 'ng-starrating';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboard: true
};


@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    PosterCardComponent,
    HomeComponent,
    GenresComponent,
    GenresListComponent,
    MovieComponent,
    AppMovieDialogComponent,
    ActorComponent,
    AllTvShowsComponent,
    GenresTvComponent,
    TvShowsComponent,
    SearchResultsComponent,
    SearchbarComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatSliderModule,
    MatExpansionModule,
    SwiperModule,
    FlexLayoutModule,
    FormsModule,
    LazyLoadImageModule,
    MatTooltipModule,
    RatingModule
  ],
  providers: [
    MoviesService,
    OnTvService,
    {provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
