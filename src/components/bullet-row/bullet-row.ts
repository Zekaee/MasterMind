import { Component, Input } from '@angular/core';
import { Row } from '../../types/row';
@Component({
  selector: 'bullet-row',
  templateUrl: 'bullet-row.html'
})
export class BulletRowComponent {
  @Input() row: Row;
  constructor() {
    
  }
}
