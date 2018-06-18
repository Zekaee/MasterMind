import { Component, Input } from '@angular/core';
import { Color } from '../../types/color';

/**
 * Generated class for the BultBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bullet-bar',
  templateUrl: 'bullet-bar.html'
})
export class BulletBarComponent {
  @Input() colors: Array<Color>;
  constructor() {
  }
}