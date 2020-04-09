import { ChangeDetectionStrategy, Component, 
  ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Options } from 'ng5-slider';
import { NbIconLibraries } from '@nebular/theme';
import { NbSearchService } from '@nebular/theme';
import { Module } from '../../@core/interfaces/common/module';
import { ApiService } from '../../api.service';

@Component({
  selector: 'ngx-tables',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  @ViewChild('onStudyPlan', { static: false }) studyPlan: ElementRef;

  advanced: boolean;
  onPlan: boolean;
  isAdPlan: string;

  totalWorkload: number = 0;
  coureLoadToHour: number = 2.5;
  weekdays: number = 7;
  weekHours: number = 168;
  overload: boolean;
  showResult: boolean = false;
  dailyRoutine: number = 0;
  weeklyRoutine: number = 0;
  otherRoutine: number = 0;
  
  showStart: boolean = true;
  showStudyPlan: boolean;
  showDailyRoutine: boolean;
  showWeeklyRoutine: boolean;
  showOtherRoutine: boolean;

  workloadForm: FormGroup;
  courseLoad: number = 20;
  courseLoadOp: Options = {
    floor: 0,
    ceil: 28,
    showSelectionBar: true,
    showTicks: true,
  };

  onSleep: boolean = false;
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

  morning: number = 0;
  morningOp: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    showTicks: true,
  };

  evening: number = 0;
  eveningOp: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    showTicks: true,
  };


  onCommute: boolean = false;
  commute: number = 0;
  commuteOp: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    showTicks: true,
  };

  exercise: number = 0;
  exerciseOp: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    showTicks: true,
  };

  onFree: boolean = false;
  free: number = 0;
  freeOp: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    showTicks: true,
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

  value: string = '';
  searchMod: Module;
  modList: Module[];

  constructor(private iconLibraries: NbIconLibraries, 
    private formBuilder: FormBuilder, private searchService: NbSearchService,
    private apiService: ApiService) {
    this.showStart = true;
    this.showStudyPlan = false;
    this.showDailyRoutine = false;
    this.showWeeklyRoutine = false;
    this.showOtherRoutine = false;
    this.advanced = false;
    this.onPlan = false;
    this.isAdPlan = 'small';
    this.modList = [];

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term.toUpperCase();
        this.apiService.getMod(this.value).subscribe(data => {
          this.searchMod = data as Module;    
        }, error => {

        });
      })

    //this.workloadForm = this.formBuilder.group();
  }

  toggleAdvanced() {
    this.advanced = !this.advanced;
    this.isAdPlan = 'large'
  }

  submit(){
    console.log(this.workloadForm.value);
  }


  addMod() {
    if(this.searchMod) this.modList.push(this.searchMod);
    this.calculateCourseLoad;
  }

  calculateCourseLoad() {
    this.modList.forEach(mod => {
      this.courseLoad = this.courseLoad + parseInt(mod.moduleCredit);
    })
  }

  sumDailyRoutine() {
    this.dailyRoutine = this.sleepTime + this.morning + this.evening 
                          + this.commute + this.free;
  }

  sumWeeklyRoutine() {
    this.weeklyRoutine = this.family + this.exercise + this.cca + this.social;
  }

  calculate() {
    this.sumDailyRoutine();
    this.sumWeeklyRoutine();
    this.totalWorkload = this.coureLoadToHour*this.courseLoad + 
                          this.weekdays * this.dailyRoutine +
                          this.weeklyRoutine;
    
    if(this.totalWorkload>this.weekHours) this.overload = true;
    else this.overload = false;

    this.showResult = true;
  }

  start() {
    this.showStudyPlan = true;
    this.showStart = false;
    setTimeout(() => {
      this.studyPlan.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    });
  }

  nextDaily() {
    this.showDailyRoutine = true;
  }

  nextWeekly() {
    this.showWeeklyRoutine = true;
  }

  nextOther() {
    this.showOtherRoutine = true;
  }

}
