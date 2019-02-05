import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DriverChargesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-driver-charges',
  templateUrl: 'driver-charges.html',
})
export class DriverChargesPage {

  private charge_1:boolean = true;
  private charge_2:boolean = false;
  private charge_3:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverChargesPage');
  }

}
