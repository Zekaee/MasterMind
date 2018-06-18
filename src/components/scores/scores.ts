import { Component, Input } from '@angular/core';
import { Score } from '../../types/score';

/**
 * Generated class for the ScoresComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scores',
  templateUrl: 'scores.html'
})
export class ScoresComponent {
  @Input() scores : Array<Score>;
  constructor() {
  }
}
