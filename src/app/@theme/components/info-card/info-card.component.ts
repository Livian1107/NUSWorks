import { Component, Input } from '@angular/core';

import { Module } from '../../../@core/interfaces/common/module'

import * as mod from '../../../../assets/data/mod_example.json';

@Component({
  selector: 'info-card',
  styleUrls: ['./info-card.component.scss'],
  templateUrl: './info-card.component.html',
})
export class InfoCardComponent {
  @Input() module: Module;
  credit: string;
  
  data: any;
  options: any;
  themeSubscription: any; 

  constructor() {
    this.module = mod['default']
    console.log(this.module)
    this.credit = this.module['moduleCredit'];
    const colors = {
      primaryLight: '#F3FF69',
      infoLight: '#FFD113',
      successLight: '#9AFF1C',
      warningLight: '#2DA8D8',
      dangerLight: '#00AC8E',
    }

    this.data = {
      labels: ['Lecture', 'Tutorial', 'Lab', 'Assessment', 'Preparation'],
      datasets: [{
        data: this.module['workload'],
        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      }],
    };
  }

 
  ngOnInit() {
    
  }

}
