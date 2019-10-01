import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from '../calendar/calendar.component';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.scss']
})
export class CalendarWrapperComponent implements OnInit {
  year = 2019;
  month = 0;


  @ViewChild('calendar') calendar: CalendarComponent;

  constructor() {
  }

  ngOnInit() {
  }

  clickPrevious() {
    if (this.month > 0) {
      this.month--;
    } else {
      this.year--;
      this.month = 11;
    }
    this.calendar.updateCalendar(this.year, this.month);
  }

  clickNext() {
    if (this.month < 11) {
      this.month++;
    } else {
      this.year++;
      this.month = 0;
    }
    this.calendar.updateCalendar(this.year, this.month);
  }

  getMonth() {
    return moment.months()[this.month];
  }
}
