import { Component } from '@angular/core';
import { countUpTimerConfigModel, timerTexts } from 'ngx-timer';

@Component({
  selector: 'ngx-workload',
  templateUrl: './workload.component.html',
})
export class WorkloadComponent {
  private testConfig: any;
  
  ngOnInit(): void {
    // countUpTimerConfigModel
    this.testConfig = new countUpTimerConfigModel();

    // custom class
    this.testConfig.timerClass = 'test_Timer_class';

    // timer text values
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = 'Hours'; // default - hh
    this.testConfig.timerTexts.minuteText = 'Minutes'; // default - mm
    this.testConfig.timerTexts.secondsText = 'Seconds'; // default - ss
  }
}
