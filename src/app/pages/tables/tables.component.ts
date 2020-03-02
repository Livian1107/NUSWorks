import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Options } from 'ng5-slider';

@Component({
  selector: 'ngx-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  totalWorkload: number = 0;
  coureLoadToHour: number = 2.5;
  weekdays: number = 7;
  weekHours: number = 168;
  overload: boolean;
  showResult: boolean = false;

  workloadForm: FormGroup;
  courseLoad: number = 20;
  courseLoadOp: Options = {
    floor: 0,
    ceil: 28,
    showSelectionBar: true,
    showTicks: true,
  };
  
  sleepTime: number = 7;
  sleepTimeOp: Options = {
    floor: 0,
    ceil: 24,
    showSelectionBar: true,
    showTicks: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 3) {
        return 'red';
      }
      if (value < 7) {
        return 'orange';
      }
      return '#2AE02A';
    },
  };

  cca: number = 0;
  ccaOp: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    showTicks: true,
  };

  family: number = 0;
  familyOp: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    showTicks: true,
  };

  social: number = 0;
  socialOp: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    showTicks: true,
  };

  constructor(private formBuilder: FormBuilder) {
    //this.workloadForm = this.formBuilder.group();
  }

  submit(){
    console.log(this.workloadForm.value);
  }

  calculate(){
    this.totalWorkload = this.coureLoadToHour*this.courseLoad + this.weekdays*this.sleepTime
      + this.cca + this.family + this.social;
    
    if(this.totalWorkload>this.weekHours) this.overload = true;
    else this.overload = false;

    this.showResult = true;
  }
}
