import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarWrapperComponent } from './calendar-wrapper.component';
import {CalendarModule} from '../calendar/calendar.module';

@NgModule({
  declarations: [CalendarWrapperComponent],
  exports: [
    CalendarWrapperComponent
  ],
  imports: [
    CommonModule,
    CalendarModule
  ]
})
export class CalendarWrapperModule { }
