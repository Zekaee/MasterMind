import { Component, Input } from '@angular/core';
import { Color } from '../../types/color';
import { BulletComponent } from '../Bullet/Bullet';

@Component({
  selector: 'bullet-bar',
  templateUrl: 'bullet-bar.html'
})

export class BulletBarComponent {
  @Input() colors: Array<Color>;
  constructor() {
    
  }
  doClicked(bullet:BulletBarComponent){
    console.log(`I'm in ${this}`); 
    console.log(bullet);
  }
}