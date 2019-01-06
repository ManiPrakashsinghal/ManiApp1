import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,LoadingController, ToastController } from 'ionic-angular';
import {PostService} from "../../app/service/postService.service";
import {HomePage} from '../home/home';
import { ShareService } from '../../app/service/share.service';
import { RegisterPage } from '../register/register';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[PostService]
})
export class LoginPage {

  loginData:any;
  loading:any;
  resData:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,
    private postService:PostService,
    private shareService:ShareService,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController,
  public storage:Storage) {
      this.loginData =  {email:"",password:""};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
	 this.menu.swipeEnable(false);
  }
  
  
  ionViewWillLeave() {
    //this.menu.swipeEnable(true);
   }

   goToReg(){
        this.navCtrl.push(RegisterPage);
     }


   doLogin() {

  
    console.log(this.loginData);
    this.loginData["dataMode"] = "login";

    this.showLoader();
     //this.regData ={"dataMode":"register","username":"jaipur","password":"pinkcity","email":"jaipur@gmail.com"};
    this.postService.login(this.loginData).then((result) => {
      console.log(result);
      this.loading.dismiss();
      this.resData = result;
      if(this.resData.success){
        this.storage.set("ClientloginId",this.resData.id);
        this.shareService.setClientId(this.resData.id);
        this.navCtrl.setRoot(HomePage);
      }else{
        this.presentToast(this.resData.message);  
      }
    },(err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });


    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
