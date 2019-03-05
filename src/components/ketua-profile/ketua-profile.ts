import { Component, Input } from '@angular/core';

/**
 * Generated class for the KetuaProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ketua-profile',
  templateUrl: 'ketua-profile.html'
})
export class KetuaProfileComponent {
@Input() text: string;
@Input() almt: string;
@Input() tel: string;
@Input() psy: string;
@Input() uname: string;
  constructor() {
  }

}
