import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { HomePage } from '../home/home';
import {PostService} from "../../app/service/postService.service";
import { LoginPage } from '../login/login';
import { OtpPage } from '../otp/otp';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[PostService]
})
export class RegisterPage {
  loading;
 regData:any =  {username:"",password:"",email:"",rePassword:"",mobileNo:"",zip_code:"",address:"",gender:"M"};
  resData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService:PostService,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
      this.regData =  {username:"",password:"",email:"",rePassword:"",mobileNo:"",zip_code:"",address:"",gender:"M"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doLogin(){
    this.navCtrl.setRoot(HomePage);
  }

  backToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }



  afterLogin() {

    console.log(this.regData);
    if(this.regValidation(this.regData)){
      this.regData["dataMode"] = "register";

      //this.regData ={"ataMode":"register","username":"jaipur","password":"pinkcity","email":"jaipur@gmail.com"};
            if(this.regData.rePassword == this.regData.password){
        
              this.navCtrl.push(OtpPage,{"data":this.regData});
        
          }else{
            this.presentToast("Password not Matched."); 
          }
    }
    
  }


  regValidation(regData){
    //this.regData =  {username:"",password:"",email:"",rePassword:"",mobileNo:"",zip_code:"",address:""};
      if(regData.username == ""){
        this.presentToast("Please Fill Name."); 
        return false;
      }else if(regData.password == ""){
        this.presentToast("Please Fill Password."); 
        return false;
      }else if(regData.email == ""){
        this.presentToast("Please Fill Email Id."); 
        return false;
      }else if(regData.rePassword == ""){
        this.presentToast("Please Fill Confirm Password."); 
        return false;
      }else if(regData.mobileNo == ""){
        this.presentToast("Please Fill Mobile No."); 
        return false;
      }else if(regData.zip_code == ""){
        this.presentToast("Please Fill Zip Code."); 
        return false;
      }else if(regData.address == ""){
        this.presentToast("Please Fill Address."); 
        return false;
      }else{
        return true;
      }
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
