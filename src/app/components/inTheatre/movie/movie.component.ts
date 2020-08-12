import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {PaginatorModel} from '../../../models/paginator.model';
import {MovieModel} from '../../../models/movie.model';
import {MovieCast} from '../../../models/movie-cast';
import {MovieVideo} from '../../../models/movie-video';
import {MoviesService} from '../../../services/inTheatre/movies.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: MovieModel;
  similarMovies: Array<PaginatorModel> = [];
  cast: MovieCast;
  video: MovieVideo;
  isLoading = true;

  @ViewChild('closeModal', {static: false}) public closeModal: ElementRef;
  @ViewChild('openModal', {static: false}) public openModal: ElementRef;


  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params[`id`];
        this.getMovie(id);
        this.getMovieCredits(id);
        this.getMovieVideo(id);
        this.getRecomendedMovie(id);
      }
    );
  }


  getMovie(id): void {
    const movieSubs = this.moviesService.getMovie(id).subscribe(
      movie => {
        this.movie = movie;

        if (!this.movie) {
          alert('Server Error');
        } else {
          this.isLoading = false;
        }
      }, () => {
      },
      () => {
        if (movieSubs) {
          movieSubs.unsubscribe();
        }
      }
    );
  }

  getMovieCredits(id): void {
    const movieCreditsSubs = this.moviesService.getMovieCredits(id).subscribe(
      res => {
        // console.log(res);
        res.cast = res.cast.filter(item => {
          return item.profile_path;
        });
        this.cast = res.cast.slice(0, 5);
      }, () => {
      },
      () => {
        if (movieCreditsSubs) {
          movieCreditsSubs.unsubscribe();
        }
      }
    );
  }

  getMovieVideo(id): void {
    const movieVideosSubs = this.moviesService.getMovieVideos(id).subscribe(
      res => {
        if (res.results && res.results.length) {
          this.video = res.results[0];
          this.video[`url`] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video[`key`]);
        }
      }, () => {
      },
      () => {
        if (movieVideosSubs) {
          movieVideosSubs.unsubscribe();
        }
      }
    );
  }

  getRecomendedMovie(id): void {
    const recomendedMoviesSubs = this.moviesService.getRecomendMovies(id).subscribe(
      res => {
        this.similarMovies = res.results.slice(0, 8);
        this.similarMovies.forEach(np => np[`isMovie`] = true);
      }, () => {
      },
      () => {
        if (recomendedMoviesSubs) {
          recomendedMoviesSubs.unsubscribe();
        }
      }
    );
  }

  openDialog(): void {
    this.dialog.open(AppMovieDialogComponent, {
      height: '555px',
      width: '800px',
      data: {video: this.video}
    });
  }
}

@Component({
  selector: 'app-movie-dialog',
  templateUrl: 'app-movie-dialog.html'
})
export class AppMovieDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  closeDialog(): void {
    this.dialogRef.close('!!!!!');
  }

}
