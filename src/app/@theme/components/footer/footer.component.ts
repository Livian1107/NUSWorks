
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">NUSWroks<b>
    <div class="socials">
      <a href="https://github.com/Livian1107" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/liwen-lai-ba0b30158/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
