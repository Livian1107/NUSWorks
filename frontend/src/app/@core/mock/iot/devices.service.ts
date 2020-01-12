
import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { Device, DevicesData } from '../../interfaces/iot/devices';

@Injectable()
export class DevicesService extends DevicesData {

  private data: Device[] = [
    {
      id: 1,
      name: 'CS3240',
      subtitle: 'Interaction Design',
      isOn: true,
      type: 'Light',
      value: 1,
      settings: {
        iconClass: 'nb-lightbulb',
        type: 'primary',
      },
    }, {
      id: 2,
      name: 'GES1002',
      subtitle: 'Global Economic DImensions of Singapore',
      isOn: true,
      type: 'RollerShades',
      value: 1,
      settings: {
        iconClass: 'nb-roller-shades',
        type: 'success',
      },
    }, {
      id: 3,
      name: 'LAC1201',
      subtitle: 'Chinese 1',
      isOn: true,
      type: 'WirelessAudio',
      value: 1,
      settings: {
        iconClass: 'nb-audio',
        type: 'info',
      },
    }, {
      id: 4,
      name: 'GET1020',
      subtitle: 'Darwin and Evolution',
      isOn: true,
      type: 'CoffeeMaker',
      value: 1,
      settings: {
        iconClass: 'nb-coffee-maker',
        type: 'warning',
      },
    },
  ];

  list(): Observable<Device[]> {
    return observableOf(this.data);
  }

  edit(device: Device): Observable<Device> {
    return observableOf(device);
  }
}
