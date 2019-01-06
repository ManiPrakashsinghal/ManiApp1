import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';


/**
 * Generated class for the HelpSupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-help-support',
  templateUrl: 'help-support.html',
})
export class HelpSupportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public callNumber:CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpSupportPage');
  }


  callInNumber(no){
    this.callNumber.callNumber(no, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  

}
