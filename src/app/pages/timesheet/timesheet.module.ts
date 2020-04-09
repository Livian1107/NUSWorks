import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbToggleModule,
  NbCardModule,
  NbProgressBarModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CountdownModule } from 'ngx-countdown';
import { ThemeModule } from '../../@theme/theme.module';
import { TimesheetComponent } from './timesheet.component';
import { ChartModule } from 'angular2-chartjs';
import { TimetrackerComponent } from './timetracker/timetracker.component';
import { TimetrackerDraggerComponent } from './timetracker/timetracker-dragger/timetracker-dragger.component';
import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxTimerModule } from 'ngx-timer';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    CountdownModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbInputModule,
    NbToggleModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbSpinnerModule,
    LeafletModule,
    NgxTimerModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [
    TimesheetComponent,
    TimetrackerComponent,
    TimetrackerDraggerComponent,
    ECommerceUserActivityComponent,
  ],
  providers: [
  ],
})
export class TimesheetModule {
}
