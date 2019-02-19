import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Component, NgZone, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormControl} from "@angular/forms";
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { CurrentBookingPage } from '../pages/current-booking/current-booking';
import { BookingHistoryPage } from '../pages/booking-history/booking-history';
import { DriverChargesPage } from '../pages/driver-charges/driver-charges';
import { HelpSupportPage } from '../pages/help-support/help-support';
import { BookingSummaryPage } from '../pages/booking-summary/booking-summary';
import { TripDetailsPage } from '../pages/trip-details/trip-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ PostService} from '../app/service/postService.service';
import { HttpModule } from '@angular/http';
import {ShareService} from '../app/service/share.service';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { SharePage } from '../pages/share/share';
import {IonicStorageModule } from "@ionic/storage";

import { Ionic2RatingModule } from 'ionic2-rating';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from 'ionic-native';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Market } from '@ionic-native/market';
import { RetingPage } from '../pages/reting/reting';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { DriverLocationPage } from '../pages/driver-location/driver-location';
import { OtpPage } from '../pages/otp/otp';
import  { AllowPermissionPage  } from '../pages/allow-permission/allow-permission';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    CurrentBookingPage,
    BookingHistoryPage,
    DriverChargesPage,
    HelpSupportPage,
    BookingSummaryPage,
    TripDetailsPage,
    SharePage,
    RetingPage,
    DriverLocationPage,
    OtpPage,
	AllowPermissionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule .forRoot(),
    Ionic2RatingModule,
    AgmCoreModule.forRoot({
          apiKey: "AIzaSyCU3MooMxfcSusLCB_loPk8Wh6nV0imWZA", 
          libraries: ["places"]
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    CurrentBookingPage,
    BookingHistoryPage,
    DriverChargesPage,
    HelpSupportPage,
    BookingSummaryPage,
    TripDetailsPage,
    SharePage,
    RetingPage,
    DriverLocationPage,
    OtpPage,
	AllowPermissionPage
  ],
  providers: [
    LocationAccuracy,
    Geolocation,
    Diagnostic,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostService,
    ShareService,
    SocialSharing,
   //Storage,
   CallNumber,
   Camera, 
   FileTransfer,
   ImagePicker,
     File,
    Transfer,
    FilePath,
    Market,
    LaunchNavigator,
  ]
})
export class AppModule {}

 