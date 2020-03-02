import { Ng5SliderModule } from 'ng5-slider';
import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, 
  NbTreeGridModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule, 
    NbSelectModule,
    ThemeModule,
    FormsModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    Ng5SliderModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    SmartTableComponent,
  ],
})
export class TablesModule { }
