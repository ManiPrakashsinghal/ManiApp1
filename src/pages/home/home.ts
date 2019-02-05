import { Component, NgZone, ElementRef, OnInit, ViewChild, Type } from '@angular/core';
import { NavController, Platform, AlertController, ToastController, MenuController } from 'ionic-angular';
import { FormControl } from "@angular/forms";
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core'; 
import {ChangeDetectorRef} from '@angular/core'

import { BookingSummaryPage } from '../booking-summary/booking-summary';
import {ShareService} from '../../app/service/share.service';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { PostService } from '../../app/service/postService.service';
import { Market } from '@ionic-native/market';
import { RetingPage } from '../reting/reting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    protected map: any;
    google:any;
    myMarker:any;
    isLocationSet = false;

    public  minDate:any  = new Date().toISOString().split('T')[0];  // new Date().toJSON().split('T')[0];  //
      public dateObj:any = new Date();
      public year:any = this.dateObj.getFullYear()+1;
      public nextYear = this.dateObj.setFullYear(this.year);
      public maxDate = this.dateObj.toISOString().split('T')[0];


    public bookingObj:any = {
        clientId:0,
        tripType:"",
        carType:"",
        gearType:"",
        pickLocation:'',
        dropLocation:'',
        startTime:'',
        endTime:'',
        minuteDiff:'',
        latitude :'',
        longitude:'',
        desLat:'',
        desLng:''
        };

    public latitude:any;
    public longitude:any;
    public searchControl: FormControl;
    public zoom:any;
    private obj:any = this;
    
    companies: any = 0;

    @ViewChild("search")
    public searchElementRef;
    public step : any;
    public step_1: boolean = true;
    public step_2: boolean = false;
    public step_3: boolean = false;
    public step_4: boolean = false;

  constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,public shareService : ShareService,
              private diagnostic: Diagnostic,
              public platform: Platform,
              private geolocation: Geolocation,
              private locationAccuracy: LocationAccuracy,
            private postService:PostService,private alertCtrl:AlertController,
        private market:Market,public toastCtrl:ToastController,
        private ref: ChangeDetectorRef,public menu: MenuController)  {


            this.shareService.setIsHomePage(true);
            this.menu.swipeEnable(true);
            console.log("minDate mani---->"+this.minDate);

    this.zoom = 10;

    var  homePageObj = this;

    this.platform.ready().then(() => {

        var options = {
            timeout: 5000
        };
        this.geolocation.getCurrentPosition(options).then(resp => {
          
            homePageObj.isLocationSet = true;
            console.log(resp);
            console.log(resp.coords);
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            homePageObj.zoom = 18;
    
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(this.latitude, this.longitude);

            var geocodeOption:any = {
                'latLng':latLng
            };
        
            if (geocoder) {
                geocoder.geocode(geocodeOption, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results[0].formatted_address); 
                    console.log('Address:'+results[0].formatted_address);
                    homePageObj.bookingObj["pickLocation"]= results[0].formatted_address;
                   //document.getElementById('txtHome').getElementsByTagName('input')[0].value = results[0].formatted_address;
                    homePageObj.myMarker.setPosition(latLng);
                    homePageObj.ref.detectChanges();
                }
                else {
                    console.log("Geocoding failed: " + status);
                }
                });
            }

        }).catch(() => {
            console.log("Error to get location");
              //set google maps defaults
                this.latitude = 26.9124;
                this.longitude = 75.7873;
                homePageObj.setCurrentPosition();
         });
       
     });
  }

  ionViewDidLoad() {
    this.shareService.setIsHomePage(true);
      //set google maps defaults
     this.checkVersion();
  }

  ionViewWillEnter(){
    this.shareService.setIsHomePage(true);
  }


  ionViewWillLeave(){
    this.shareService.setIsHomePage(false);
  }

  ionViewDidLeave() {
    this.shareService.setIsHomePage(false);
  }

  mapReady(map){
    this.map = map;
    this.loadMap();
  }


   loadMap(){


    var homePageObj  = this;

    var center = new google.maps.LatLng(this.latitude,this.longitude);
     this.myMarker = new google.maps.Marker({
        position: center,
        draggable: false,
        map: this.map
    });

    homePageObj.myMarker.setMap(this.map);

    google.maps.event.addListener(this.map, 'drag', function () {
        homePageObj.myMarker.setPosition(this.getCenter()); // set marker position to map center
        // updatePosition(this.getCenter().lat(), this.getCenter().lng()); // update position display
      });

    google.maps.event.addListener(this.map, 'dragend', function () {
        document.getElementById('txtHome').getElementsByTagName('input')[0].blur();
        document.getElementById('textDes').getElementsByTagName('input')[0].blur();


        homePageObj.myMarker.setPosition(this.getCenter()); // set marker position to map center
         updatePosition(this.getCenter().lat(), this.getCenter().lng()); // update position display
      });

      function updatePosition(lat, lng) {
          //if(homePageObj.isLocationSet){
               homePageObj.setAddressOnDrag(lat,lng);
          ///}
     }


     //create search FormControl
     this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {


        var mapOptions = {
            mapTypeId: google.maps.MapTypeId.HYBRID,
            mapTypeControl: false,
            panControl: false,
            streetViewControl: false,
            zoomControl: true,
            componentRestrictions: {country: "IND"},
          };

        //pick up location work
        let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];

        let autocomplete =  new google.maps.places.Autocomplete(nativeHomeInputBox,mapOptions);

        //new google.maps.places.Autocomplete(nativeHomeInputBox,autocompleteOption);

        autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
                //get the place result
                let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                this.bookingObj.pickLocation = place.formatted_address;
                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                //set latitude, longitude and zoom
                this.latitude = place.geometry.location.lat();
                this.longitude = place.geometry.location.lng();
                this.zoom = 18;

                var latLng = new google.maps.LatLng(this.latitude, this.longitude);
                homePageObj.myMarker.setPosition(latLng);
                homePageObj.ref.detectChanges();

            });
        });
    

        //destination work 
        let nativeDesInputBox = document.getElementById('textDes').getElementsByTagName('input')[0];
        let autocompleteDes = new google.maps.places.Autocomplete(nativeDesInputBox,mapOptions);

        autocompleteDes.addListener("place_changed", () => {
            this.ngZone.run(() => {
                //get the place result
                let placeDes: google.maps.places.PlaceResult = autocompleteDes.getPlace();

                this.bookingObj.dropLocation = placeDes.formatted_address;
                //verify result
                if (placeDes.geometry === undefined || placeDes.geometry === null) {
                    return;
                }
                //set latitude, longitude and zoom
                this.bookingObj.desLat = placeDes.geometry.location.lat();
                this.bookingObj.desLng = placeDes.geometry.location.lng();
               // this.zoom = 12;
               homePageObj.ref.detectChanges();
            });
        });
    });

    
  }


//   markerMoved(event){
//         console.log(event);
//         this.setAddressOnDrag(lat,lng);
//   }


  setAddressOnDrag(lat,lng){
     var obj = this;
      console.log(lat);
    this.latitude = lat;
    this.longitude = lng;

    console.log(this.latitude);

    var geocoder = new google.maps.Geocoder();
    var latLng = new google.maps.LatLng(this.latitude, this.longitude);

    var geocodeOption:any = {
        'latLng':latLng
    };

    if (geocoder) {
        geocoder.geocode(geocodeOption, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results[0].formatted_address); 
            console.log('Address:'+results[0].formatted_address);
             obj.bookingObj["pickLocation"]= results[0].formatted_address;
             obj.ref.detectChanges();
           //document.getElementById('txtHome').getElementsByTagName('input')[0].value = results[0].formatted_address;
        }
        else {
            console.log("Geocoding failed: " + status);
        }
        });
    }
  }

  setCurrentPosition(){
        this.diagnostic.isLocationEnabled()
        .then((state) => {
            if (state){
                console.log("location on");
                this.getCurrentPosition();
            } else {
                this.diagnostic.switchToLocationSettings();
                this.getCurrentPosition();
            }
        }).catch(e => console.error(e));
  }


  getCurrentPosition(){

    var homePageObj = this;
    var options = {
        enableHighAccuracy:true
    };
    this.geolocation.getCurrentPosition(options).then(resp => {
      
        homePageObj.isLocationSet = true;
        console.log(resp);
        console.log(resp.coords);
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.zoom = 18;

        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);

        var geocodeOption:any = {
            'latLng':latLng
        };
    
        if (geocoder) {
            geocoder.geocode(geocodeOption, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results[0].formatted_address); 
                console.log('Address:'+results[0].formatted_address);
                homePageObj.bookingObj["pickLocation"]= results[0].formatted_address;
               //document.getElementById('txtHome').getElementsByTagName('input')[0].value = results[0].formatted_address;
                homePageObj.myMarker.setPosition(latLng);
                homePageObj.ref.detectChanges();
            }
            else {
                console.log("Geocoding failed: " + status);
            }
            });
        }

    }).catch(() => {
        console.log("Error to get location");
          //set google maps defaults
    });

  }


    bookingSummary(){

        var strStartTime = this.bookingObj.startTime;
        var  pickdt = strStartTime.replace("T",' ');
        pickdt = pickdt.replace("Z",''); 

        var strEndTime = this.bookingObj.endTime;
        var  dropdt = strEndTime.replace("T",' ');
        dropdt = dropdt.replace("Z",''); 

        let curDatePlus1Hr;
        var d = new Date();
        d.setHours(d.getHours()+1);
        curDatePlus1Hr  = new Date(d);
        console.log(curDatePlus1Hr);
        let pickUpTime;
        pickUpTime = new Date(pickdt);


        var minuteDIff = this.diff_minutes(this.bookingObj.startTime,this.bookingObj.endTime);

        if(this.bookingObj.startTime == "" || this.bookingObj.endTime == ""){
            this.presentToast("Please select start trip time and End trip time. "); 
        }else{

            if(this.bookingObj.startTime == this.bookingObj.endTime){
                this.presentToast("Please select End trip time different from Start time. "); 
            }
            else if ((Date.parse(dropdt) <= Date.parse(pickdt))) {
                this.presentToast("End time should be greater than Start time");
              }else if((Date.parse(curDatePlus1Hr) > Date.parse(pickUpTime))){
                this.presentToast("Start time should be 60 minutes greater than Current time");
              }else{
                this.goToBookingSummary();
              }
                
        } 
        
       

    }

    goToBookingSummary(){

        var strStartTime = this.bookingObj.startTime;
        var  pickdt = strStartTime.replace("T",' ');
        pickdt = pickdt.replace("Z",''); 

        var strEndTime = this.bookingObj.endTime;
        var  dropdt = strEndTime.replace("T",' ');
        dropdt = dropdt.replace("Z",''); 

        var minuteDIff = this.diff_minutes(this.bookingObj.startTime,this.bookingObj.endTime);
        var clientId = this.shareService.getClientId();

        this.bookingObj["clientId"] = clientId;
        this.bookingObj["endTime"] = dropdt;
        this.bookingObj["startTime"] = pickdt;
        this.bookingObj["minuteDiff"] = minuteDIff;
        this.bookingObj["latitude"] = this.latitude;
        this.bookingObj["longitude"] = this.longitude;
 
        this.shareService.setBookingDetail(this.bookingObj);
        this.navCtrl.push(BookingSummaryPage);
    }

    diff_minutes(t2, t1) 
    {
        var dt2 = new Date(t2);
        var dt1 = new Date(t1);
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));
    }


  
    
    next(){
        //alert(this.bookingObj.tripType);
        console.log(this.bookingObj.pickLocation);
        console.log(this.bookingObj.dropLocation);
        if(this.bookingObj.pickLocation ==  ""){
            this.presentToast("Please select pick location (From) .");
        }else if(this.bookingObj.dropLocation ==  ""){
            this.presentToast("Please select drop location (To).");
        }else if(this.bookingObj.tripType == ""){
            this.presentToast("Please select Trip Type.");
         }
        else{
            this.step_1 = false;
            this.step_2 = true;
        }

    }
    next1(){
       // alert(this.bookingObj.carType);
       if(this.bookingObj.carType != ""){
        this.step_1 = false;
        this.step_2 = false;
        this.step_3 = true;
       }else{
        this.presentToast("Please select car Type.");
       }
    }
    next2(){
       // alert(this.bookingObj.gearType);
       if(this.bookingObj.gearType != ''){
        this.step_1 = false;
        this.step_2 = false;
        this.step_3 = false;
        this.step_4 = true;
       }else{
        this.presentToast("Please select Gear Type.");
       }
    }
    back(){
        this.step_1 = true;
        this.step_2 = false;
    }
    back1(){
        this.step_1 = false;
        this.step_2 = true;
        this.step_3 = false;
    }
    back2(){
        this.step_1 = false;
        this.step_2 = false;
        this.step_3 = true;
        this.step_4 = false;
    }


    checkVersion(){
        this.postService.getVersion().then((result) => {
            console.log(result);
            var serverVersion = parseInt(result["data"]);
            var appVersion = parseInt(this.shareService.getVersion());
            if(appVersion < serverVersion){
                ///alert("need to update");
                this.updateConfirm();
            }else{
                //setTimeout(function(){
                    this.obj.checkReting();
                 // }, 3000);
            }
          },(err) => {
            console.log(err);
          });
    }


    checkReting(){
        var id = this.shareService.getClientId();
        this.postService.checkReting(id).then((result) => {
            console.log(result);
            var retingObj = result[0];
          if(retingObj != undefined){
              this.navCtrl.setRoot(RetingPage,{"data":retingObj});
          }
          },(err) => {
            console.log(err);
          });
    }


    updateConfirm() {
        let alert = this.alertCtrl.create({
          title: 'Confirm Update !',
          message: 'New update available. Do you want to update ?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
               // setTimeout(function(){
                    this.obj.checkReting();
                //  }, 3000);
              }
            },
            {
              text: 'Yes',
              handler: () => {
                console.log('Yes clicked');
                this.market.open('com.singhal.driverOnApp');
                this.obj.checkReting();
              }
            }
          ]
        });
        alert.present();
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