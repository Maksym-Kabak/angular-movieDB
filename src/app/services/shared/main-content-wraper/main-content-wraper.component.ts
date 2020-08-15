import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content-wraper',
  templateUrl: './main-content-wraper.component.html',
  styleUrls: ['./main-content-wraper.component.css']
})
export class MainContentWraperComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() isEnd: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
