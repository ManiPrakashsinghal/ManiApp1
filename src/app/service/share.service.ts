import { Injectable } from '@angular/core';
 
@Injectable()
export class ShareService {
    
    BookingDetailJson:any;
    clientId:any;
    dataOnBook:any;
    tripDetail:any = {};
    appVersion:any = '37';
    isHomePageFlag:any= false;

 tripObj = {
     "local":"Local",
     "oneway":"One Way Trip",
     "outstation":"Outstation Trip"
 };

 carObj = {
     "small":"Small",
     "medium":"Medium",
     "large":"Large",
     "luxury":"Luxury"
 }

 gearObj = {
     "manual":"Manual",
     "auto":"Automatic"
 }


    // tripType: string;
    // carType: string;
    // gearType:String;
    // pickLocation:any;
    // startTime:any;
    // endTime:any;

    constructor() {

        this.BookingDetailJson = {
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
            longitude:''
            };
            this.clientId = 0;
            this.dataOnBook = {}
    }

    getVersion(){
       return this.appVersion;
    }
  
    setBookingDetail(obj) {
       this.BookingDetailJson = obj;
    }
  
    getBookingDetail() {
        // return this.firstName + ' ' + this.lastName;
        return this.BookingDetailJson;
    }

    setClientId(id){
        this.clientId = id;
    }

    getClientId(){
        return this.clientId;
    }

    setDataOnBook(val){
        this.dataOnBook = val;
    }

    getDataOnBook(){
        return this.dataOnBook;
    }

    setTripDetail(obj){
        this.tripDetail = obj;
    }

    getTripDetail(){
        return this.tripDetail;
    }

    getTotalHMTime(t2,t1){
        //"2018-05-23 15:44:00"
        var dt2 = new Date(t2);
        var dt1 = new Date(t1);
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        var  totalMinute =  Math.abs(Math.round(diff));
        
        var hours = Math.floor( totalMinute / 60);          
        var minute = totalMinute % 60;

        var TotalHM = hours+" Hours:"+minute+" Minutes";
        return TotalHM;
    }

    isHomePage(){
        return this.isHomePageFlag;
      }
    
    
      setIsHomePage(val){
        this.isHomePageFlag = val;
      }
    
    
}