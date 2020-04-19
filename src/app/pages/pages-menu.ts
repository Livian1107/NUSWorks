import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu: NbMenuItem[] = [
      {
        title: 'Course Estimator',
        icon: 'grid-outline',
        link: '/pages/course-estimator' ,
        children: undefined,
    
      },
      {
        title: 'Timetable',
        icon: 'layout-outline',
        link: '/pages/modules-dashboard',
        children: undefined,
      },
      {
        title: 'Time Tracker',
        icon: 'pie-chart-outline',
        link: '/pages/timesheet',
        home: true,
        children: undefined,
      },
      {
        title: 'Workload',
        icon: 'briefcase-outline',
        link: '/pages/workload',
        children: undefined,
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Login',
            link: '/auth/login',
          },
          {
            title: 'Register',
            link: '/auth/register',
          },
          {
            title: 'Request Password',
            link: '/auth/request-password',
          },
          {
            title: 'Reset Password',
            link: '/auth/reset-password',
          },
        ],
      },
    ];

    return of([...dashboardMenu,]);
  }
}
