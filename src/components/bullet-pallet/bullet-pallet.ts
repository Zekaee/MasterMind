import { Component } from '@angular/core';
import { Color } from '../../types/color';

/**
 * Generated class for the BultPalletComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bullet-pallet',
  templateUrl: 'bullet-pallet.html'
})
export class BulletPalletComponent {
  colors : Array<Color>;
  constructor() {
    this.colors = [Color.Blue,Color.Brown,Color.Green,Color.Pink,Color.Red,Color.Yellow];
  }
}
