import { Component } from '@angular/core';
import { CountupTimerService } from 'ngx-timer';
import { countUpTimerConfigModel, timerTexts } from 'ngx-timer';
import { TimesheetEvent } from '../../@core/interfaces/iot/timesheet';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  addSeconds
} from 'date-fns';

@Component({
  selector: 'ngx-timesheet',
  styleUrls: ['timesheet.component.scss'],
  templateUrl: './timesheet.component.html',
})
export class TimesheetComponent {
  private testConfig: any;
  advanced: boolean;

  constructor(private timerService: CountupTimerService){
    this.advanced = false;
  }

  newEvent: TimesheetEvent ={
    start: new Date(),
    end: new Date(),
  };

  events: TimesheetEvent[] = [
    {
      start: addDays(new Date(), 1),
      end: addDays(new Date(), 1),
      module: 'CS3240',
      task: 'assignment',
    },
    {
      start: startOfDay(new Date()),
      module: 'CS3240',
      task: 'assignment',
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      module: 'GES1002',
      task: 'assignment',
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      module: 'LAC1201',
      task: 'assignment',
    }
  ]

  ngOnInit(): void {
    //countUpTimerConfigModel
    this.testConfig = new countUpTimerConfigModel();

    //custom class
    this.testConfig.timerClass = 'test_Timer_class';

    //timer text values  
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = "Hours"; //default - hh
    this.testConfig.timerTexts.minuteText = "Minutes"; //default - mm
    this.testConfig.timerTexts.secondsText = "Seconds"; //default - ss
  }

  start() {
    this.timerService.startTimer();
    this.newEvent.start = new Date();
    console.log("let's start" + this.newEvent.start);
  }

  pause() {
    this.timerService.pauseTimer();
  }

  stop() {
    this.timerService.pauseTimer();
    this.newEvent.end = addSeconds(this.newEvent.start, this.timerService.totalSeconds);
    this.addNewEvent();
    this.resetEvent();
  }

  addNewEvent(){
    this.events = [
      this.newEvent,
      ...this.events
    ];
  }

  resetEvent(){
    this.newEvent = { start: new Date() };
    this.timerService.stopTimer();
  }

  toggleAdvanced(){
    this.advanced = !this.advanced;
  }
}
