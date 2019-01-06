import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController } from 'ionic-angular';
import {ShareService} from '../../app/service/share.service';
import {PostService} from '../../app/service/postService.service';

/**
 * Generated class for the BookingSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { BookingHistoryPage  } from '../booking-history/booking-history';
import { CurrentBookingPage } from '../current-booking/current-booking';

@Component({
  selector: 'page-booking-summary',
  templateUrl: 'booking-summary.html',
})
export class BookingSummaryPage {

  endTime: any;
  bookingDeail:any;
  loading:any;
  bookingSummary:any;

  startTime:any;
  pickLocation:any;
  dropLocation:any;
  tripType:any;
  carType:any;
  gearType:any;
  charge:any;
  discount:any;
  extraCharges:any;
  convFees:any;
  finalFee:any;
  tax:any;
  nightCharge:any;

  //show total booking Time
  hours:any = 0;
  minute:any= 0;


  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController,public postService:PostService,public shareService:ShareService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingSummaryPage');
    this.bookingDeail = this.shareService.getBookingDetail();
    this.getBookingSummary(this.bookingDeail);
    console.log(this.bookingDeail);
  }
  
  bookNow(){
    console.log(this.bookingSummary);
    this.confirmBook(this.bookingSummary);
   // this.shareService.setDataOnBook(this.bookingSummary);
   // this.navCtrl.push(BookingHistoryPage);
  }

  additionalCharge(){
    var tripTypeAd = this.bookingSummary["tripType"];
    const additionalModal = this.modal.create('AdditionalChargePage',{tripType:tripTypeAd});
    additionalModal.present();
   }

confirmBook(data){

  this.showLoader();
  
    this.postService.boookNow(data).then((result) => {
      console.log(result);
      this.loading.dismiss();
    var status = result["success"];
    var msg = result["message"];
    if(status){
      this.navCtrl.setRoot(CurrentBookingPage);    ///push(CurrentBookingPage);
    }else{
      this.presentToast(msg);
    }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }


  getBookingSummary(bookinDetail){
    this.showLoader();
    console.log(JSON.stringify(bookinDetail));
    this.postService.getSummaryDetail(bookinDetail).then((result) => {
        console.log(result);
        this.loading.dismiss();
        this.bookingSummary = result;
        this.pickLocation = this.bookingSummary["pickLocation"];
        this.dropLocation = this.bookingSummary["dropLocation"];
        this.startTime = this.bookingSummary["startTime"];
        this.endTime = this.bookingSummary["endTime"];
        this.carType = this.shareService.carObj[this.bookingSummary["carType"]];
        this.gearType = this.shareService.gearObj[this.bookingSummary["gearType"]];
        this.tripType = this.shareService.tripObj[this.bookingSummary["tripType"]];
        this.convFees = this.bookingSummary["convenience"];
        this.tax = this.bookingSummary["taxValue"];
        this.charge = this.bookingSummary["actualPrice"];
        this.discount = this.bookingSummary["DiscountValue"];
        this.extraCharges = this.bookingSummary["extra_charges"]
        this.finalFee = this.bookingSummary["total"];
        this.nightCharge = this.bookingSummary["nightCharge"];
        var totalMinute = this.bookingSummary["minuteDiff"];
        
        this.hours = Math.floor(totalMinute / 60);          
        this.minute = totalMinute % 60;

         }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Calculating...'
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
