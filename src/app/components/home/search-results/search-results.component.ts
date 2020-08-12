import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() movie: any;
  @Output() cleanInput = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCleanInput(): void {
    this.cleanInput.emit();
  }
}
