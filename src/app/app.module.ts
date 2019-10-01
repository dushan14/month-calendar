import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CalendarModule} from './calendar/calendar.module';
import {CalendarWrapperModule} from './calendar-wrapper/calendar-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    CalendarWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
