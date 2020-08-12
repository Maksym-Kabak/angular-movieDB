// @ts-ignore
import {Component, ElementRef, OnInit, ViewChild, HostListener} from '@angular/core';
import {MoviesService} from '../../../services/inTheatre/movies.service';

class ElementRef<T> {
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {


  @ViewChild('input', {static: true}) input: ElementRef<HTMLInputElement>;
  term = '';
  searchMovies: any[];

  @HostListener('window:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent): void {
    if (ev.key === 'Escape') {
      this.cleanInput();
    }
  }

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
  }

  valueChange(): void {
    if (this.term.length > 2) {
      this.moviesService.searchMovies(this.term).subscribe((data) => {
        setTimeout(() => {
          this.searchMovies = data.results.slice(0, 7);
        }, 800);
      });
    } else {
      this.cleanInput();
    }
  }

  cleanInput(): void {
    this.term = '';
    this.searchMovies = [];
  }

}
