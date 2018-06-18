import { Component, Input } from '@angular/core';
import { Color } from '../../types/color';

/**
 * Generated class for the PuzzleBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'puzzle-bar',
  templateUrl: 'puzzle-bar.html'
})
export class PuzzleBarComponent {
  @Input() colors : Array<Color>;
  constructor() {
    this.colors = [Color.Blue,Color.Yellow,Color.Brown,Color.Pink]; 
  }
}
