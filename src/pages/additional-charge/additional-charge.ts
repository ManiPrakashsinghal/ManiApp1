import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AdditionalChargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additional-charge',
  templateUrl: 'additional-charge.html',
})
export class AdditionalChargePage {

  oneWay:any= false;
  outStanding:any = false;
  local:any=false;

  constructor(private navParams: NavParams, private view: ViewController) {

    console.log(navParams.get('tripType'));
    var tripTypeAdd = navParams.get('tripType');
    if(tripTypeAdd == "local"){
        this.local = true;
    }else if(tripTypeAdd == "oneway"){
      this.oneWay = true;
    }else if(tripTypeAdd == "outstation"){
      this.outStanding = true;
    }
    

  }


  closeThisModel(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionalChargePage');
  }

}
