import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PostService } from '../../app/service/postService.service';
import { ShareService } from '../../app/service/share.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the DriverLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-driver-location',
  templateUrl: 'driver-location.html',
})
export class DriverLocationPage {

  @ViewChild('map') mapElement: ElementRef;
  //  @ViewChild('directionsPanel') directionsPanel: ElementRef;
    map: any;
    latitude:any;
    longitude:any;

    directionsService:any;
    directionsDisplay:any;
    myMarker:any;

    originLat:any;
    originLng:any;
    DesLat:any;
    DesLng:any;
    interval:any;

    journeyTime : any;
    bookingId: any;
    bookingObj:any;
	TotalRideTimeShow:any;
    
    loading:any;
 
    constructor(public navCtrl: NavController,private geo: Geolocation,public navParams: NavParams,
        private platform : Platform,public loadingCtrl: LoadingController, 
        private toastCtrl: ToastController,public postService:PostService, public shareService:ShareService, 
        private launchNavigator: LaunchNavigator, public callNumber:CallNumber) {

        this.bookingId = this.navParams.get('bookingId');
        console.log(this.bookingId);
         this.TotalRideTimeShow = '00(HH): 00(MM)';
          this.platform.ready().then(() => {
            });
    }
    ionViewDidLoad(){
		this.showRideTime();
        this.loadMap();
    }

    ionViewWillLeave(){
      clearInterval(this.interval);
    }
 
   
    loadMap(){
 
        var pageObj = this;
        this.geo.getCurrentPosition().then((position) => {
     
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
    
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      
          let mapOptions = {
            center: latLng,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
     
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

         
          pageObj.getDriverLocation();
         
        }, (err) => {
          console.log(err);
        });
     
      }

    getDriverLocation() {
        
      var id  = this.bookingId;
    this.postService.getDriverLocation(id).then((result) => {
      console.log(result);
      this.bookingObj = result["data"];
      this.setDriverLocation();
	  
    }, (err) => {
      this.presentToast(err);
    });
  }
  
  showRideTime() {
      var id  = this.bookingId;
    this.postService.getDriverLocation(id).then((result) => {
      console.log(result);
      this.bookingObj = result["data"];
	  if(this.bookingObj["start_time"] != "0000-00-00 00:00:00"){
           var startTime = this.bookingObj["start_time"];
           this.upTime(startTime);
        }
    }, (err) => {
      this.presentToast(err);
    });
  }
  
  

  setDriverLocation(){
    var pageObj = this;
      var obj = this.bookingObj;
      this.originLat = obj["driverLat"];
      this.originLng = obj["driverLng"];
      if(obj["arrived_time"] == "0000-00-00 00:00:00"){
        this.DesLat = obj["latitude"];
        this.DesLng =   obj["longitude"];
      }else{
        this.DesLat = obj["desLat"];
        this.DesLng =   obj["desLng"];
      }
      if(this.directionsDisplay != undefined){
      this.directionsDisplay.setMap(null);
      }
      this.drawRoute();
      this.setDriverMarker();
      this.interval = setInterval(function(){  pageObj.moveDriverMarker(); }, 3000);
      
    }

    setDriverMarker(){
      var dLat = this.bookingObj.driverLat;
      var dLng = this.bookingObj.driverLng;
      var center = new google.maps.LatLng(dLat,dLng);
      this.myMarker = new google.maps.Marker({
        position: center,
        draggable: false,
        map: this.map,
        icon:"assets/imgs/driver_icon.png"
        });

        this.myMarker.setMap(this.map);
    }

    moveDriverMarker(){

      var id  = this.bookingId;
      this.postService.getDriverLocation(id).then((result) => {
        console.log(result);
        this.bookingObj = result["data"];
        var dLat = this.bookingObj.driverLat;
          var dLng = this.bookingObj.driverLng;
          var center = new google.maps.LatLng(dLat,dLng);
          this.myMarker.setPosition(center);
      }, (err) => {
        this.presentToast(err);
      });

      
    }


      drawRoute(){
      
        var latitude = Number(this.originLat);
        var longitude = Number(this.originLng);
        var desLat = Number(this.DesLat);
        var desLng = Number(this.DesLng);

        // var center = new google.maps.LatLng(latitude,longitude);
        // var originPlace = new google.maps.Marker({
        //   position: center,
        //   draggable: false,
        //   map: this.map,
        //   icon:"assets/imgs/driver_icon.png"
        //   });
       
        var originPlace = new google.maps.LatLng(latitude,longitude);
        var destination = new google.maps.LatLng(desLat,desLng);
   
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
   
          this.directionsDisplay.setMap(this.map);
         // this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);
   
          this.directionsService.route({
              origin: originPlace,
              destination: destination,
              travelMode: google.maps.TravelMode['DRIVING']
          }, (response, status) => {
   
              if(status == google.maps.DirectionsStatus.OK){
                  // this.directionsDisplay.setDirections(res);
                  new google.maps.DirectionsRenderer({
                    map: this.map,
                    directions: response,
                    suppressMarkers: true
                });
                var leg = response.routes[0].legs[0];
                this.makeMarkerStart(leg.start_location, "", "title", this.map);
                this.makeMarkerEnd(leg.end_location, "", 'title', this.map);
              } else {
                  console.warn(status);
              }
          });
      }

  makeMarkerStart(position, icon, title, map) {
        new google.maps.Marker({
            position: position,
            map: map,
            icon: "assets/imgs/client.png",
            title: title
        });
    }

    makeMarkerEnd(position, icon, title, map) {
      new google.maps.Marker({
          position: position,
          map: map,
          icon: "assets/imgs/endIcon.png",
          title: title
      });
  }
  
   upTime(countTo) {
          var temp = this;
        this.now = new Date();
        this.countTo = new Date(countTo);
        var difference = this.now - this.countTo;
      
        var days=Math.floor(difference/(60*60*1000*24)*1);
        var hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
        var mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
        var secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
      
        this.TotalRideTimeShow = days+' Day: '+hours+' Hours: '+mins+' Minutes: '+secs+' Seconds';
      
        clearTimeout(upTimeTto);
        var upTimeTto =setTimeout(function(){temp.upTime(temp.countTo)},1000);
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

      callInNumber(no){
        this.callNumber.callNumber(no, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
      }

}
