import { Component, Input } from '@angular/core';
import { Row } from '../../types/row';

@Component({
  selector: 'bullet-board',
  templateUrl: 'bullet-board.html'
})
export class BulletBoardComponent {
  @Input() 
  rows : Array<Row>;
  @Input() 
  activeRow : Row;
  constructor() {
   
  }
}
