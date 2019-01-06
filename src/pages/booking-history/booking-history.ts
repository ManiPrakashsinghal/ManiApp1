import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the BookingHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { TripDetailsPage } from '../trip-details/trip-details';
import { ShareService } from '../../app/service/share.service';
import { PostService } from '../../app/service/postService.service';

@Component({
  selector: 'page-booking-history',
  templateUrl: 'booking-history.html',
})
export class BookingHistoryPage {

  loading:any;
  bookingData:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private shareService:ShareService,private postService:PostService, public loadingCtrl: LoadingController
  , private toastCtrl: ToastController ) {

    var clientId = this.shareService.getClientId();
    this.getBokingHistory(clientId);

  }

  ionViewDidLoad() {
   // var clientId = this.shareService.getClientId();
    //this.getBokingHistory(clientId);
    console.log('ionViewDidLoad BookingHistoryPage');
   // var clientId = this.shareService.getClientId();
    //this.getBokingHistory(clientId);
  }

  getBokingHistory(id){
    this.showLoader();
  
    this.postService.getBookingHistory(id).then((result) => {
      console.log(result);
      this.loading.dismiss();
      this.bookingData = result;
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

  tripDetail(obj){
    console.log(obj);
    this.shareService.setTripDetail(obj);
    this.navCtrl.push(TripDetailsPage);
  }
}
