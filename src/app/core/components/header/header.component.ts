import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector:        'app-gc-header',
  templateUrl:     './header.component.html',
  styleUrls:       ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HeaderComponent {
  constructor() {
  }
}
