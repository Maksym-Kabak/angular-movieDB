import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PaginatorModel} from '../../models/paginator.model';
import {MoviesService} from '../../services/inTheatre/movies.service';
import {OnTvService} from '../../services/onTv/on-tv.service';
import {SwiperComponent, SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  nowPlaying: PaginatorModel[];
  popularList: PaginatorModel[];
  upcomingList: PaginatorModel[];
  topRatedList: PaginatorModel[];

  onTheAir: PaginatorModel[];
  airingToday: PaginatorModel[];
  popularTvShows: PaginatorModel[];
  isLoading = true;
  config: SwiperConfigInterface = {};

  @ViewChild(SwiperComponent, {static: false}) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective, {static: true}) directiveRef: SwiperDirective;


  constructor(
    private moviesService: MoviesService,
    private onTVService: OnTvService
  ) {
    this.moviesService.getUpComingMovies(1).subscribe(res => {
      this.upcomingList = res.results.filter(up => new Date(up.release_date).getTime() >= new Date().getTime());
      this.upcomingList.forEach(np => np[`isMovie`] = true);
    });

    this.moviesService.getTopRatedMovies(1).subscribe(res => {
      this.topRatedList = res.results;
    });
  }

  ngOnInit(): void {

    this.getNowPlayingMovies(1);
    this.getPopularMovies(1);
    //  On TV
    this.getTvOnTheAir(1);
    this.getAiringToday(1);
    this.getPopularTvShow(1);
  }

  ngAfterViewInit(): void {
    this.config = {
      direction: `horizontal`,
      slidesPerView: 4,
      navigation: true,
      pagination: {
        el: `.swiper-pagination`,
        clickable: true,
        hideOnClick: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
      spaceBetween: 20
    };
  }


  getNowPlayingMovies(page: number): void {
    this.moviesService.getNowPlaying(page).subscribe(res => {
      this.nowPlaying = res.results;
      if (!this.nowPlaying) {
        alert('Server Error');
      } else {
        this.isLoading = false;
      }
      this.nowPlaying.forEach(np => np[`isMovie`] = true);
    });
  }

  getPopularMovies(page: number): void {
    this.moviesService.getPopular(page).subscribe(res => {
      this.popularList = res.results;
      this.popularList.forEach(np => np[`isMovie`] = true);
    });
  }


  changeTab(): void {
    this.config = {
      direction: `horizontal`,
      slidesPerView: 4,
      navigation: true,
      pagination: {
        el: `.swiper-pagination`,
        clickable: true,
        hideOnClick: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
      spaceBetween: 20
    };
  }

  getTvOnTheAir(page: number): void {
    this.onTVService.getTvOnTheAir(page).subscribe(
      res => {
        this.onTheAir = res.results;
        this.onTheAir.forEach(np => np[`isMovie`] = false);
        this.config = {
          direction: `horizontal`,
          slidesPerView: 4,
          navigation: true,
          pagination: {
            el: `.swiper-pagination`,
            clickable: true,
            hideOnClick: true
          },
          breakpoints: {
            1199: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
          },
          spaceBetween: 20
        };
      },
      error => console.log(error)
    );
  }

  getAiringToday(page: number): void {
    this.onTVService.getTVAiringToday(page).subscribe(
      res => {
        this.airingToday = res.results;
        this.airingToday.forEach(np => np[`isMovie`] = false);
      },
      error => console.log(error)
    );
  }

  getPopularTvShow(page: number): void {
    this.onTVService.getPopularTVShow(page).subscribe(
      res => {
        this.popularTvShows = res.results;
        this.popularTvShows.forEach(np => np[`isMovie`] = false);
      },
      error => console.log(error)
    );
  }
}
