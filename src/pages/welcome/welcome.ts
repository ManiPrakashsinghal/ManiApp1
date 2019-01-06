import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {Storage} from '@ionic/storage';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ShareService } from '../../app/service/share.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,
    public storage:Storage,public share:ShareService) {

      // this.storage.get('ClientloginId').then(loginId=>{
      //   console.log('ClientloginId: '+ loginId);
      //   if(loginId){
      //   this.share.setClientId(loginId);
      //   this.navCtrl.setRoot(HomePage);
      //   }
      // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
		this.menu.close();
	 this.menu.swipeEnable(false);

  }
  
   ionViewWillLeave() {
      //this.menu.swipeEnable(true);
   }

  login(){
    this.navCtrl.push(LoginPage);
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }

}
