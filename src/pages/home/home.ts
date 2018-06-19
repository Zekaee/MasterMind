import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Color } from '../../types/color';
import { Row } from '../../types/row';
import { Score } from '../../types/score';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  puzzleColors : Array<Color>;
  boardRows : Array<Row>;
  puzzleIsCovered : boolean;
  constructor(public navCtrl: NavController) {
    this.puzzleColors = [Color.Blue,Color.Brown,Color.Green,Color.Pink];
    this.boardRows = [];
    this.puzzleIsCovered = true;
    for (let i = 0; i <10; i++)
    {
      let row = new Row();
      row.colors = [Color.None,Color.None,Color.None,Color.None];
      row.scores = [Score.Empty,Score.Empty,Score.Empty,Score.Empty];
      this.boardRows.push(row);
    }
  }
}
