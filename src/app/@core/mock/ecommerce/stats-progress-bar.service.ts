
import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../../interfaces/ecommerce/stats-progress-bar';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Today’s Progress',
      value: 7,
      activeProgress: 70,
      description: '70% of the tasks have been done',
    },
    {
      title: 'CS3240',
      value: 3,
      activeProgress: 80,
      description: 'To Do List: Story Board',
    },
    {
      title: 'GES1002',
      value: 4,
      activeProgress: 100,
      description: 'Congratulations! You have finished today\'s tasks',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
