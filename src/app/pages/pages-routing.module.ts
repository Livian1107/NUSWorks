import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { WorkloadComponent } from "./workload/workload.component";
import { TablesComponent } from "./tables/tables.component"
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'module',
      component: ModuleComponent,
    },
    {
      path: 'course-estimator',
      component: TablesComponent,
    },
    {
      path: 'timesheet',
      component: TimesheetComponent,
    },
    {
      path: 'modules-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'workload',
      component: WorkloadComponent,
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'course-estimator',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
