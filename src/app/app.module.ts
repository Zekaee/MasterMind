import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BulletBarComponent } from '../components/Bullet-bar/Bullet-bar';
import { BulletComponent } from '../components/Bullet/Bullet';
import { PuzzleBarComponent } from '../components/puzzle-bar/puzzle-bar';
import { BulletBoardComponent } from '../components/bullet-board/bullet-board';
import { BulletPalletComponent } from '../components/bullet-pallet/bullet-pallet';
import { BulletRowComponent } from '../components/bullet-row/bullet-row';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    BulletBarComponent,
    BulletComponent,
    PuzzleBarComponent,
    BulletBoardComponent,
    BulletPalletComponent,
    BulletRowComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
