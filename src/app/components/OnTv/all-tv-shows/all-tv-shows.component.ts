import {Component, OnInit} from '@angular/core';
import {OnTvService} from '../../../services/onTv/on-tv.service';
import {GenresListModel} from '../../../models/genres-list';
import {PaginatorModel} from '../../../models/paginator.model';

@Component({
  selector: 'app-all-tv-shows',
  templateUrl: './all-tv-shows.component.html',
  styleUrls: ['./all-tv-shows.component.css']
})
export class AllTvShowsComponent implements OnInit {

  onTheAir: Array<PaginatorModel> = [];
  genres: GenresListModel;
  max = 10;
  min = 0;
  step = 1;
  value = 0;
  thumbLabel = true;
  tickInterval = 10;
  totalResults: any;

  constructor(private onTvService: OnTvService) {
  }

  ngOnInit(): void {
    this.getTvOnTheAir(1);
    this.onTvService.getGenres().subscribe(res => this.genres = res.genres);
  }

  getTvOnTheAir(page: number): void {
    const getTVonTheAirSubs = this.onTvService.getTvOnTheAir(page).subscribe(
      res => {
        this.totalResults = res.total_results;
        this.onTheAir = res.results;
        this.onTheAir.forEach(np => np[`isMovie`] = false);
      }, error => console.log(error),
      () => {
        if (getTVonTheAirSubs) {
          getTVonTheAirSubs.unsubscribe();
        }
      }
    );
  }

  changePage(event): void {
    this.getTvOnTheAir(event.pageIndex + 1);
  }

}
