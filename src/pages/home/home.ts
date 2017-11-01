import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { PracticePage } from '../../pages/practice/practice'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushPage : any;
  params : Object;

  constructor(public loadingCtrl: LoadingController) {
    this.pushPage = PracticePage
    this.params = 0;
   }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  myMethod()
  {

  }
}
