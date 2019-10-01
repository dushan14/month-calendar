import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() {
  }

  getDatesOfTheMonth(year: number, month: number): Moment[] {
    const startDay = moment().year(year).month(month).startOf('month');
    const endDay = moment().year(year).month(month).endOf('month');
    const days: Moment[] = [];
    let day = startDay;
    while (day <= endDay) {
      days.push(day);
      day = day.clone().add(1, 'd');
    }
    return days;
  }
}
