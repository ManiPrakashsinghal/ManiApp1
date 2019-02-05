import { AlertController, ToastController,Events } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { CurrentBookingPage } from '../pages/current-booking/current-booking';
import { BookingHistoryPage } from '../pages/booking-history/booking-history';
import { DriverChargesPage } from '../pages/driver-charges/driver-charges';
import { HelpSupportPage } from '../pages/help-support/help-support';
import { SharePage } from '../pages/share/share';
//import { DriverLocationPage } from '../pages/driver-location/driver-location';
import { Storage } from '@ionic/storage';
import { ShareService } from './service/share.service';
import { Diagnostic } from '@ionic-native/diagnostic'; 
//import { NumberFormatStyle } from '@angular/common';

@Component({
  templateUrl: 'app.html'
})
 

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = WelcomePage;
  isExistShow:any=true;
  pages: Array<{title: string, icon: string, component: any}>;
  userName :any;
  gender:any;
  
  constructor(private alertCtrl: AlertController, public platform: Platform,public events: Events, 
    public statusBar: StatusBar, public splashScreen: SplashScreen,
  public storage:Storage,public share:ShareService, private diagnostic: Diagnostic,
public toastCtrl:ToastController) {
    this.initializeApp();
 
   this.userName = "";

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', icon: 'contact', component: ProfilePage },
      { title: 'Book Driver', icon: 'car', component: HomePage },
      { title: 'Current Booking', icon: 'attach', component: CurrentBookingPage },
      { title: 'Booking History', icon: 'filing', component: BookingHistoryPage },
      { title: 'Driver Charges', icon: 'cash', component: DriverChargesPage },
      { title: 'Help and Support', icon: 'help', component: HelpSupportPage },
      { title: 'Share', icon: 'share', component: SharePage },
      //{ title: 'dl', icon: 'share', component: DriverLocationPage },
      
      
    ];

    

      this.storage.get('ClientloginId').then(loginId=>{
        console.log('ClientloginId: '+ loginId);
        if(loginId){
        this.share.setClientId(loginId);
        this.nav.setRoot(HomePage);
        }else{
          this.nav.setRoot(WelcomePage);
        }
      });
      
       events.subscribe('user:gender', (gndr) => {
		// user and time are the same arguments passed in `events.publish(user, time)`
		this.gender = gndr;
	  });


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.diagnostic.isLocationEnabled()
      .then((state) => {
          if (state){
              console.log("location on");
          } else {
          this.diagnostic.switchToLocationSettings();
          }
      }).catch(e => console.error(e));
      this.splashScreen.hide();
    });
//back button code
this.platform.registerBackButtonAction((event) => {
 
      //console.log(this.nav.getActive().name);
      if(this.share.isHomePage()) {    // your homepage
         // this.platform.exitApp();
         if(this.isExistShow){
            this.ExitConfirm();
         }
      }
      else {
          if(this.nav.canGoBack()){
              this.nav.pop();
          }else{
               //this.nav.setRoot(HomePage);
               this.storage.get('ClientloginId').then(loginId=>{
                console.log('ClientloginId: '+ loginId);
                if(loginId){
                this.share.setClientId(loginId);
                this.nav.setRoot(HomePage);
                }else{
                  this.nav.setRoot(WelcomePage);
                }
              });
          }
      }
    },101);    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Do you want to Logout ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.storage.remove("ClientloginId");
            this.nav.setRoot(WelcomePage);
          }
        }
      ]
    });
    alert.present();
  }


  ExitConfirm() {
    this.isExistShow = false;
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want to Exit?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.isExistShow = true;
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.isExistShow = true;
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }
  
  
  
}
