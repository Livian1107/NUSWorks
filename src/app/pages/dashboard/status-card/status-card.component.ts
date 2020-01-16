
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ subtitle }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() type: string;
  @Input() on = true;

  @Output() statusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick() {
    this.on = !this.on;
    this.statusChanged.emit(this.on);
  }
}
