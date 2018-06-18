import { Color } from "./color";
import { Score } from "./score";

export class Row{
    colors : Array<Color>;
    scores : Array<Score>;
    public Row(){
        this.colors = [Color.None,Color.None,Color.None,Color.None];
        this.scores = [Score.Wrong,Score.Wrong,Score.Wrong,Score.Wrong];
    }
}