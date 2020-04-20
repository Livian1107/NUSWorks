import { Ng5SliderModule } from 'ng5-slider';
import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule,
  NbInputModule, 
  NbTreeGridModule, 
  NbButtonModule, 
  NbSelectModule, 
  NbStepperModule,
  NbLayoutModule,
  NbRouteTabsetModule,
  NbTabsetModule,
  NbActionsModule,
  NbToggleModule,
  NbSearchModule,
  NbBadgeModule,
  NbListModule,
  NbProgressBarModule,
 } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

@NgModule({
  imports: [
    NbProgressBarModule,
    NbListModule,
    NbToggleModule,
    NbActionsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbStepperModule,
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
    NbSearchModule,
    NbBadgeModule,
    NbListModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    SmartTableComponent,
  ],
  exports: [ThemeModule]
})
export class TablesModule { }
