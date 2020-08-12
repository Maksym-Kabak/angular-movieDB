import {Component, OnInit} from '@angular/core';
import {PaginatorModel} from '../../../models/paginator.model';
import {MoviesService} from '../../../services/inTheatre/movies.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  title: string;
  movies: PaginatorModel[];

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params[`id`];
      this.title = params[`name`];
      this.getMoviesByGenre(id);
    });
  }

  getMoviesByGenre(id): void {
    const moviesByGenre = this.moviesService.getMoviesByGenre(id).subscribe(
      res => {
        this.movies = res.results;
        this.movies.forEach(np => np[`isMovie`] = true);
      }, error => console.log(error),
      () => {
        if (moviesByGenre) {
          moviesByGenre.unsubscribe();
        }
      }
    );
  }


}
