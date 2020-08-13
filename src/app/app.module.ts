import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import { SearchbarComponent } from './components/home/searchbar/searchbar.component';
import {GenresTvComponent} from './components/OnTv/genres-tv/genres-tv.component';
import {AppMovieDialogComponent, MovieComponent} from './components/inTheatre/movie/movie.component';
import {SearchResultsComponent} from './components/home/search-results/search-results.component';

import {OnTvService} from './services/onTv/on-tv.service';
import {MoviesService} from './services/inTheatre/movies.service';

import {SWIPER_CONFIG, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './services/shared/shared.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboard: true
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    AppMovieDialogComponent,
    GenresTvComponent,
    SearchResultsComponent,
    SearchbarComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
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
