import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ShareService } from '../../app/service/share.service';
import { PostService } from '../../app/service/postService.service';
import { BookingHistoryPage } from '../booking-history/booking-history';
import { HomePage } from '../home/home';
import { CallNumber } from '@ionic-native/call-number';
import { DriverLocationPage } from '../driver-location/driver-location';


/**
 * Generated class for the TripDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-trip-details',
  templateUrl: 'trip-details.html',
})
export class TripDetailsPage {

  loading:any;

  bookingId = 0;

  public bookingObj:any = {
  actualPrice:"",
  discount:"",
  convPrice:"",
  total_fair:"",
  pick_location:"",
  status:"",
  night_charge:"",
  loading:"",
  };

  driverId = 0;
  public driverObj:any = {
    first_name:"",
    last_name:"",
    mobile_no:""
  }

  totalHM:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public shareService:ShareService,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController,
    public postService:PostService,public callNumber:CallNumber) {
    var obj = this.shareService.getTripDetail();
    console.log(obj);
    var startTime = obj["start_time"];
    var endTime = obj["end_time"];;
    this.totalHM = shareService.getTotalHMTime(endTime,startTime);
    //alert(this.totalHM);
    this.showDetail(obj);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripDetailsPage');
  }

showDetail(obj){
  this.bookingId = obj["id"];
  var driverId = obj["driver_id"];
  this.getDriverDetail(driverId);
  this.bookingObj = obj;
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

cancelBooking(){
    var cancelId = this.bookingId;
    this.showLoader();
    this.postService.cancelBooking(cancelId).then((result) => {
        console.log(result);
        this.loading.dismiss();
        this.navCtrl.push(HomePage);
         }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });
  }

  callInNumber(no){
    this.callNumber.callNumber(no, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  getDriverLocation(){
    console.log(this.bookingObj);
    var id = this.bookingObj.id;
    this.navCtrl.push(DriverLocationPage,{"bookingId":id});
  }
  

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'cancel...'
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
