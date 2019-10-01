import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Moment} from 'moment';
import {CalendarService} from './calendar.service';
import {detectChanges} from '@angular/core/src/render3';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() year;
  @Input() month;

  monthColsArray = [0, 1, 2, 3, 4, 5, 6];
  monthRowsArray = [0, 1, 2, 3, 4, 5];

  private firstDayColumnIndex = -1;
  public datesOfTheMonth: Moment[] = [];

  constructor(
    private calService: CalendarService,
    private cdref: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.updateCalendar(this.year, this.month);
  }

  updateCalendar(year: number, month: number) {
    this.firstDayColumnIndex = -1;
    this.datesOfTheMonth = this.calService.getDatesOfTheMonth(year, month);
    this.cdref.detectChanges();
  }

  getDate(row: number, col: number): Moment {
    if (((row * 7) - this.firstDayColumnIndex > this.datesOfTheMonth.length - 1)) {
      return null;
    } else {
      if (row === 0) {
        if (this.firstDayColumnIndex === -1) {
          if (col === this.datesOfTheMonth[0].day()) {
            this.firstDayColumnIndex = col;
            return this.datesOfTheMonth[0];
          } else {
            return null;
          }
        } else {
          return this.datesOfTheMonth[col - this.firstDayColumnIndex];
        }
      } else {
        return this.datesOfTheMonth[(row * 7) + col - this.firstDayColumnIndex];
      }
    }

  }

}
