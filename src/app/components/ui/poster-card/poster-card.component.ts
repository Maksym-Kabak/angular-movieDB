import {Component, Input, OnInit} from '@angular/core';
import {Movies} from '../../../models/movies.interface';
import {PaginatorModel} from '../../../models/paginator.model';

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: ['./poster-card.component.css']
})
export class PosterCardComponent implements OnInit {

  // @Input()
  // model: any;

  @Input() movie: Movies;
  @Input() movies: Movies[];
  @Input() isPerson: boolean;
  @Input() isTv: boolean;
  @Input() movieGenre: number;
  @Input() tvGenre: number;
  @Input() page: number;
  @Input() topRating: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
