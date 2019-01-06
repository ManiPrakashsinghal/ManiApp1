import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PostService } from '../../app/service/postService.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the RetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-reting',
  templateUrl: 'reting.html',
})
export class RetingPage {

  retingVal:any=0;
  rate:any = 3;
  bookingObj:any;
  bookingId:any;
  driverObj:any= {
    first_name:'',
    last_name:'',
    mobile_no:'',
    address:''
  };
  loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController,
    private postService:PostService) {
    this.bookingObj =  this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetingPage');
    this.bookingId = this.bookingObj["id"];
    var driverId = this.bookingObj["driver_id"];
    this.getDriverDetail(driverId);
  }


  onModelChange(event){
    console.log(event);
    this.retingVal = event;
  }

  submit(){
    //this.navCtrl.setRoot(RideInitiatePage);
    this.setReting();
  }

  setReting(){
    var retingVal = this.retingVal;
    var bookingId = this.bookingId;
    this.postService.updateReting(retingVal,bookingId).then((result) => {
      console.log(result);
      this.loading.dismiss();
      let status = result["status"];
      if(status){
        this.navCtrl.setRoot(HomePage);
      }else{
        var msg = result["message"];
        this.presentToast(msg);
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Loading...'
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

  getDriverDetail(id){
    this.showLoader();
    this.postService.getDriverDetail(id).then((result) => {
        console.log(result);
        this.loading.dismiss();
        this.driverObj = result["data"];
         }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });

}


}
