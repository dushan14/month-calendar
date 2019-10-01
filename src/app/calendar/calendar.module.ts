import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar.component';
import {CalendarService} from './calendar.service';
import {DayModule} from '../day/day.module';

@NgModule({
  declarations: [CalendarComponent],
  exports: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    DayModule
  ],
  providers: [
    CalendarService
  ]
})
export class CalendarModule {
}
