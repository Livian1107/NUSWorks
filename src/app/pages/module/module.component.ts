import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ModuleApi } from '../../@core/backend/common/api/module.api';


@Component({
  selector: 'ngx-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent {
  year: string;
  code: string;
  moduleTree: any = [];
  moduleList: any = [];

  constructor(private ModuleApi: ModuleApi) {
    this.year = "2019-2020";
    this.code = "CS5346";
    this.ModuleApi.getModuleInfo(this.year, this.code).subscribe(data => {
        console.log(data);
      });

    this.ModuleApi.getAllModuleCondensed(this.year).subscribe(data => {
      var filtered = data.filter(d => d.moduleCode.startWith("CS"));
      console.log(filtered);
    });

    this.moduleTree = [
      {
        id: 'a',
        source: 'first',
        target: 'second',
        label: 'is parent of'
      }, {
        id: 'b',
        source: 'first',
        target: 'third',
        label: 'custom label'
      }
    ];

    this.moduleList = [
      {
        id: 'first',
          label: 'A'
      }, {
        id: 'second',
          label: 'B'
      }, {
        id: 'third',
          label: 'C'
      }
    ];
    
  }

  run() {
  
  }

}