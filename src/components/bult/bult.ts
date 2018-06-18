import { Component, Input } from '@angular/core';
import { Color } from '../../types/color';
import { PropertyBindingType } from '@angular/compiler';

/**
 * Generated class for the BultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bult',
  templateUrl: 'bult.html',  
})

export class BultComponent {
  @Input() color: Color;
  @Input() isCovered : boolean;
  constructor() {

  }
}