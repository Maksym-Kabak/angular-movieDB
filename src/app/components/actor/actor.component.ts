import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../services/inTheatre/movies.service';
import {ActivatedRoute} from '@angular/router';
import {MovieModel} from '../../models/movie.model';
import {Actors} from '../../models/actors';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  person: Actors;
  movies: MovieModel[];
  // tslint:disable-next-line:ban-types
  externalIds: Object = {};

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params[`id`];
      this.moviesService.getPersonDetail(id).subscribe(person => {
        this.person = person;
        console.log(person);
      }, error => console.log(error));
      this.moviesService.getPersonCast(id).subscribe(res => {
        this.movies = res.cast;
        this.movies.forEach(np => np[`isMovie`] = true);
      }, error => console.log(error));

      this.moviesService.getPersonExternalData(id).subscribe(res => {
        this.externalIds = res;
        console.log(res);
      }, error => console.log(error));
    });
  }


}
