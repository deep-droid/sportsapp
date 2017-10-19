import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FeedbackPage } from '../pages/feedback/feedback';
import { HistoryPage } from '../pages/history/history';
import { PracticePage } from '../pages/practice/practice';
import { SettingsPage } from '../pages/settings/settings';
import { StatisticsPage } from '../pages/statistics/statistics';
import { WorkoutPage } from '../pages/workout/workout';
import { TimerPage } from '../pages/timer/timer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,
    FeedbackPage,
    HistoryPage,
    PracticePage,
    SettingsPage,
    StatisticsPage,
    WorkoutPage,
    TimerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage
    FeedbackPage,
    HistoryPage,
    PracticePage,
    SettingsPage,
    StatisticsPage,
    WorkoutPage,
    TimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
