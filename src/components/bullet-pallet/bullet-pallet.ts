import { Component, Input } from '@angular/core';
import { Color } from '../../types/color';
@Component({
  selector: 'bullet-pallet',
  templateUrl: 'bullet-pallet.html'
})
export class BulletPalletComponent {
  colors : Array<Color>;
  @Input() selected: Color;
  constructor() {
    this.colors = [Color.Blue,Color.Brown,Color.Green,Color.Pink,Color.Red,Color.Yellow];
  }
}
