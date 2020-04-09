import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/interfaces/common/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {
  acadYear: string;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      code: {
        title: 'Course Code',
        type: 'string',
      },
      title: {
        title: 'Title',
        type: 'string',
      },
      semesters: {
        title: 'Semesters',
        type: 'number[]',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  

  constructor(private service: SmartTableData) {
    // this.service.getAllModData(this.acadYear).subscribe(
    //   (result) => {
    //     const data = result;
    //     this.source.load(data);
    //   }
    // );
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  retrieve() {
   
  }
}
