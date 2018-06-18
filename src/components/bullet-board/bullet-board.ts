import { Component, Input } from '@angular/core';
import { Color } from '../../types/color';
import { Score } from '../../types/score';
import { Row } from '../../types/row';

/**
 * Generated class for the BultBoardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bullet-board',
  templateUrl: 'bullet-board.html'
})
export class BulletBoardComponent {
  @Input() rows : Array<Row>;
  constructor() {
    this.rows = [];
    for (let i = 0; i <10; i++)
    {
      console.log(i);
      let row = new Row();
      row.colors = [Color.None,Color.None,Color.None,Color.None];
      row.scores = [Score.Wrong,Score.Wrong,Score.Wrong,Score.Wrong];
      this.rows.push(row);
    }
  }
}
