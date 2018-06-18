import { Component, Input } from '@angular/core';
import { Color } from '../../types/color';

/**
 * Generated class for the BultBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bult-bar',
  templateUrl: 'bult-bar.html'
})
export class BultBarComponent {
  @Input() colors: Array<Color>;
  @Input() isCovered : boolean;
  constructor() {
    this.colors = [Color.Blue,Color.Yellow,Color.Brown,Color.Pink]; 
    this.isCovered = false;
  }
}