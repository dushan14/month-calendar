import {Component, Input, OnInit} from '@angular/core';
import {Moment} from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() date: Moment = null;
  @Input() col: number;
  @Input() row: number;

  constructor() {
  }

  ngOnInit() {
  }

  getDayTitle() {
    if (this.row === 0) {
      return moment.weekdays()[this.col];
    } else {
      return '';
    }
  }
}
