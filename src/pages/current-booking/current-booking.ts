import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ShareService } from '../../app/service/share.service';
import { PostService } from '../../app/service/postService.service';
import { HomePage } from '../home/home';
import { TripDetailsPage } from '../trip-details/trip-details';

/**
 * Generated class for the CurrentBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-current-booking',
  templateUrl: 'current-booking.html',
})
export class CurrentBookingPage {

  currentData:any = [];
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private shareService:ShareService,private postService:PostService, public loadingCtrl: LoadingController
    , private toastCtrl: ToastController) {

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentBookingPage');
    var clientId = this.shareService.getClientId();
      this.getCurrentBooking(clientId);
  }

  getCurrentBooking(id){
    this.showLoader();
  
    this.postService.getCurrentBooking(id).then((result) => {
      console.log(result);
      this.loading.dismiss();
      this.currentData = result;
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
}

viewBooking(obj){
  console.log(obj);
  this.shareService.setTripDetail(obj);
  this.navCtrl.push(TripDetailsPage);
}


cancelBooking(id){
  var cancelId = id;
  this.showLoader();
  this.postService.cancelBooking(cancelId).then((result) => {
      console.log(result);
      var status = result["status"];
      this.loading.dismiss();
      if(status){
      this.navCtrl.setRoot(HomePage);
      }else{
        var msg =  result["message"];
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

}
