import {Component, OnInit} from '@angular/core';
import {TvShowModel} from '../../../models/onTV/tvShow.model';
import {OnTvService} from '../../../services/onTv/on-tv.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  tvShow: TvShowModel;
  isLoading = true;

  constructor(
    private onTvService: OnTvService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params[`id`];

      this.onTvService.getTVShow(id).subscribe(tvShow => {
        this.tvShow = tvShow;

        if (!this.tvShow) {
          alert('Server Error');
        } else {
          this.isLoading = false;
        }
      });

    });
  }

}
