import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { RoutinePage } from '../pages/routine/routine';
import { ActivityLibraryPage } from '../pages/activityLibrary/activityLibrary';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    RoutinePage,
    ActivityLibraryPage 
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    RoutinePage,
    ActivityLibraryPage 
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
