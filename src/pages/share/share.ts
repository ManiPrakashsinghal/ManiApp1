import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  recipeUrl: any = "http:driveronapp.com";
  description: any = "Application where you can book your driver according to  hourly payment.";
  title: any = "DriverOnApp";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  shareRecipe() {

    var options = {
      message: 'Application where you can book your driver according to  hourly payment.',
      subject: 'driverONApp',
      url: 'https://play.google.com/store/apps/details?id=com.singhal.driverOnApp',
      chooserTitle: 'Share via...'
    };

    SocialSharing.shareWithOptions(options).then(() => {
      console.log('Shared!');
    }).catch((err) => {
      console.log('Oops, something went wrong:', err);
    });
  }

}
