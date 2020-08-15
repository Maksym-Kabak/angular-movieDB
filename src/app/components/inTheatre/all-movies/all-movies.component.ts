import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../../../services/inTheatre/movies.service';
import {PaginatorModel} from '../../../models/paginator.model';
import {GenresListModel} from '../../../models/genres-list';
import {Subscription} from 'rxjs';
import {Movies} from '../../../models/movies.interface';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit, OnDestroy {

  isLoading = true;
  isEnd = false;
  scrollLoading = false;
  genreValue = 'all';
  movies: Movies[] = [];
  filtered: Movies[];
  genres = [];
  totalPage: number;
  page = 1;

  nowPlayingSubscription: Subscription;
  nowTopRatedSubscription: Subscription;
  forGenreSubscription: Subscription;
  getGenreSubscription: Subscription;
  nowUpComingSubscription: Subscription;
  nowPopularSubscription: Subscription;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getGenreSubscription = this.moviesService
      .getGenresMovieList()
      .subscribe((res: any) => {
        this.genres = res.genres;
      });
    this.getMovies(this.page);
  }

  getMovies(page: number = 1): void {
    if (this.genreValue === 'all') {
      this.nowPlayingSubscription = this.moviesService
        .getNowPlaying(page)
        .subscribe((data) => {
          this.filtered = data.results.filter(
            (movie: Movies) => movie.poster_path !== null
          );
          this.isLoading = false;
          this.totalPage = data.total_pages;
          this.movies.push(...this.filtered);
          this.scrollLoading = false;
        });
    }
    if (this.genreValue === 'top') {
      this.nowTopRatedSubscription = this.moviesService
        .getTopRatedMovies(page)
        .subscribe((data) => {
          this.filtered = data.results.filter(
            (movie: Movies) => movie.poster_path !== null
          );
          this.isLoading = false;
          this.totalPage = data.total_pages;
          this.movies.push(...this.filtered);
          this.scrollLoading = false;
        });
    }
    if (this.genreValue === 'trend') {
      this.nowPopularSubscription = this.moviesService
        .getPopular(page)
        .subscribe((data) => {
          this.filtered = data.results.filter(
            (movie: Movies) => movie.poster_path !== null
          );
          this.isLoading = false;
          this.totalPage = data.total_pages;
          this.movies.push(...this.filtered);
          this.scrollLoading = false;
        });
    } else {
      this.forGenreSubscription = this.moviesService
        .getMoviesForGenre(+this.genreValue, page)
        .subscribe((data) => {
          this.filtered = data.results.filter(
            (movie: Movies) => movie.poster_path !== null
          );
          this.isLoading = false;
          this.totalPage = data.total_pages;
          this.movies.push(...this.filtered);
          this.scrollLoading = false;
          console.log(this.genreValue);
        });
    }
  }

  onGenreChange(): void {
    this.page = 1;
    this.movies = [];
    this.isLoading = true;
    // document.querySelector('select').blur();
    this.getMovies(this.page);
  }

  getUpComing(page): void {
    this.nowUpComingSubscription = this.moviesService
      .getUpComingMovies(page)
      .subscribe((data) => {
        this.filtered = data.results.filter(
          (movie: Movies) => movie.poster_path !== null
        );
        this.isLoading = false;
        this.totalPage = data.total_pages;
        this.movies.push(...this.filtered);
        this.scrollLoading = false;
      });
  }

  onScroll(): void {
    this.scrollLoading = true;
    this.page++;
    if (this.page === this.totalPage) {
      this.isEnd = true;
      return;
    }
    this.getMovies(this.page);
  }


  onUpcoming(): void {
    this.page = 1;
    this.movies = [];
    this.isLoading = true;
    this.getUpComing(this.page);
  }


  ngOnDestroy(): void {
    if (this.nowPlayingSubscription) {
      this.nowPlayingSubscription.unsubscribe();
    }
    if (this.forGenreSubscription) {
      this.forGenreSubscription.unsubscribe();
    }
    if (this.getGenreSubscription) {
      this.getGenreSubscription.unsubscribe();
    }
    if (this.nowTopRatedSubscription) {
      this.nowTopRatedSubscription.unsubscribe();
    }
    if (this.nowUpComingSubscription) {
      this.nowUpComingSubscription.unsubscribe();
    }
    if (this.nowPopularSubscription) {
      this.nowPopularSubscription.unsubscribe();
    }
  }

}
