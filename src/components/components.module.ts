import { NgModule } from '@angular/core';
import { BulletBarComponent } from './Bullet-bar/Bullet-bar';
import { BulletComponent } from './Bullet/Bullet';
import { BulletBoardComponent } from './Bullet-board/Bullet-board';
import { PuzzleBarComponent } from './puzzle-bar/puzzle-bar';
import { BulletPalletComponent } from './Bullet-pallet/Bullet-pallet';
import { BulletRowComponent } from './bullet-row/bullet-row';
import { ScorePinComponent } from './score-pin/score-pin';
import { ScoresComponent } from './scores/scores';
@NgModule({
	declarations: [BulletBarComponent,
    BulletBarComponent,
    BulletComponent,
    BulletBoardComponent,
    PuzzleBarComponent,
    BulletPalletComponent,
    BulletRowComponent,
    ScorePinComponent,
    ScoresComponent],
	imports: [],
	exports: [BulletBarComponent,
    BulletBarComponent,
    BulletComponent,
    BulletBoardComponent,
    PuzzleBarComponent,
    BulletPalletComponent,
    ScorePinComponent,
    BulletRowComponent,
    ScoresComponent]
})
export class ComponentsModule {}
