import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PostService } from '../../app/service/postService.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  otpValue:any;
  regData:any;
  resData:any;
  mobileNo:any;
  originalOtp:any;

  loading:any;

  isenabled:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private registerService:PostService,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController ) {
    this.regData = this.navParams.get('data');
    this.mobileNo = this.regData.mobileNo;
    this.sendOtpToNumber();

    var options = {
      delimiter : "code is",
      length : 6,
      origin : "WAYSMS"
    };
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

  submit(val){
    if(val == this.originalOtp){
      //alert("Otp Matched");
      this.registerUser();
    }else{
      alert("Please try Again Invalid OTP");
    }
  }

  reSendOtp(){
    this.isenabled = false;
    this.sendOtpToNumber();
  }

  sendOtpToNumber(){

    var obj = this;

    setTimeout(function(){ obj.isenabled = true; }, 30000);

    var val = Math.floor(1000 + Math.random() * 9000);
    var mobileNo = this.mobileNo;
    this.showLoader();
    this.registerService.sendOtp(mobileNo,val).then((result) => {
      this.loading.dismiss();
     this.originalOtp = val;
   }, (err) => {
     this.originalOtp = null;
     this.loading.dismiss();
     this.presentToast("Error To send OTP. Please Try Again");
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

  registerUser() {

    console.log(this.regData);
    this.regData["dataMode"] = "register";

    this.showLoader();
     this.registerService.register(this.regData).then((result) => {
      console.log(result);
      this.loading.dismiss();
      this.resData = result;
      if(this.resData.success){
        this.navCtrl.setRoot(LoginPage);  
      }else{
        this.presentToast(this.resData.message);  
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }



}


