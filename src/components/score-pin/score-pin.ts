import { Component, Input } from '@angular/core';
import { Score } from '../../types/score';

/**
 * Generated class for the ScorePinComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'score-pin',
  templateUrl: 'score-pin.html'
})
export class ScorePinComponent {
  @Input() score : Score;
  constructor() {
  }
}
