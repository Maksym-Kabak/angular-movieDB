import {Component, OnInit} from '@angular/core';
import {GenresListModel} from '../../../models/genres-list';
import {MoviesService} from '../../../services/inTheatre/movies.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  genres: GenresListModel;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe(res => {
      this.genres = res.genres;
    });
  }

}
