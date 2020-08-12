import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../../services/inTheatre/movies.service';
import {PaginatorModel} from '../../../models/paginator.model';
import {GenresListModel} from '../../../models/genres-list';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {


  nowPlaying: PaginatorModel[];
  genres: GenresListModel;


  totalResults: any;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getNowPlayingMovies(1);

    this.moviesService.getGenres().subscribe(res => {
        this.genres = res.genres;
      }
    );
  }

  getNowPlayingMovies(page: number): void {
    const nowPlayingSubs = this.moviesService.getNowPlaying(page).subscribe(
      res => {
        this.totalResults = res.total_results;
        this.nowPlaying = res.results;
        this.nowPlaying.forEach(np => np[`isMovie`] = true);
      }, () => {
      },
      () => {
        if (nowPlayingSubs) {
          nowPlayingSubs.unsubscribe();
        }
      }
    );
  }

  changePage(event): void {
    this.getNowPlayingMovies(event.pageIndex + 1);
  }

}
