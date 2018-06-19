import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '../../types/color';

@Component({
  selector: 'bullet',
  templateUrl: 'bullet.html',  
})

export class BulletComponent {
  @Input() 
  color: Color;
  @Input()
  isCovered : boolean;
  @Output()
  clicked = new EventEmitter();
  constructor() {
  }
  doClicked(){
  //  console.log(`I'm in ${this}`); 
    this.clicked.emit({bullet:this});
  }
}