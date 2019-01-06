webpackJsonp([1],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip_details_trip_details__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CurrentBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrentBookingPage = /** @class */ (function () {
    function CurrentBookingPage(navCtrl, navParams, shareService, postService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareService = shareService;
        this.postService = postService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.currentData = [];
    }
    CurrentBookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentBookingPage');
        var clientId = this.shareService.getClientId();
        this.getCurrentBooking(clientId);
    };
    CurrentBookingPage.prototype.getCurrentBooking = function (id) {
        var _this = this;
        this.showLoader();
        this.postService.getCurrentBooking(id).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            _this.currentData = result;
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    CurrentBookingPage.prototype.viewBooking = function (obj) {
        console.log(obj);
        this.shareService.setTripDetail(obj);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__trip_details_trip_details__["a" /* TripDetailsPage */]);
    };
    CurrentBookingPage.prototype.cancelBooking = function (id) {
        var _this = this;
        var cancelId = id;
        this.showLoader();
        this.postService.cancelBooking(cancelId).then(function (result) {
            console.log(result);
            var status = result["status"];
            _this.loading.dismiss();
            if (status) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                var msg = result["message"];
                _this.presentToast(msg);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    CurrentBookingPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    CurrentBookingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CurrentBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-current-booking',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\current-booking\current-booking.html"*/'<!--\n\n  Generated template for the CurrentBookingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Current Bookings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let data of currentData" >\n\n    <ion-card-header> Trip will start from </ion-card-header>\n\n    <ion-card-content class="bookingSummary" (click)="viewBooking(data)">\n\n      <p icon-start>\n\n        <ion-icon name="calendar"></ion-icon>\n\n        {{data.start_time}}</p>\n\n      <p icon-start>\n\n        <ion-icon name="pin"></ion-icon>\n\n        <strong class="label">FROM </strong> :{{data.pick_location}}</p>\n\n      <p icon-start>\n\n        <ion-icon name="pin"></ion-icon>\n\n        <strong class="label">TO </strong> :{{data.drop_location}}</p>\n\n      <p icon-start>\n\n        <ion-icon name="timer"></ion-icon>\n\n        Hourly</p>\n\n    </ion-card-content>\n\n    <ion-card-content>\n\n      <ion-row  *ngIf=\'data.initiate_time == "0000-00-00 00:00:00"\' >\n\n        <button ion-button color="danger" outline (click)="cancelBooking(data.id)">Cancel Booking</button>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\current-booking\current-booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], CurrentBookingPage);
    return CurrentBookingPage;
}());

//# sourceMappingURL=current-booking.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__driver_location_driver_location__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TripDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TripDetailsPage = /** @class */ (function () {
    function TripDetailsPage(navCtrl, navParams, shareService, loadingCtrl, toastCtrl, postService, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareService = shareService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.postService = postService;
        this.callNumber = callNumber;
        this.bookingId = 0;
        this.bookingObj = {
            actualPrice: "",
            discount: "",
            convPrice: "",
            total_fair: "",
            pick_location: "",
            status: "",
            night_charge: "",
            loading: "",
        };
        this.driverId = 0;
        this.driverObj = {
            first_name: "",
            last_name: "",
            mobile_no: ""
        };
        var obj = this.shareService.getTripDetail();
        console.log(obj);
        var startTime = obj["start_time"];
        var endTime = obj["end_time"];
        ;
        this.totalHM = shareService.getTotalHMTime(endTime, startTime);
        //alert(this.totalHM);
        this.showDetail(obj);
    }
    TripDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TripDetailsPage');
    };
    TripDetailsPage.prototype.showDetail = function (obj) {
        this.bookingId = obj["id"];
        var driverId = obj["driver_id"];
        this.getDriverDetail(driverId);
        this.bookingObj = obj;
    };
    TripDetailsPage.prototype.getDriverDetail = function (id) {
        var _this = this;
        this.showLoader();
        this.postService.getDriverDetail(id).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            _this.driverObj = result["data"];
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TripDetailsPage.prototype.cancelBooking = function () {
        var _this = this;
        var cancelId = this.bookingId;
        this.showLoader();
        this.postService.cancelBooking(cancelId).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TripDetailsPage.prototype.callInNumber = function (no) {
        this.callNumber.callNumber(no, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    TripDetailsPage.prototype.getDriverLocation = function () {
        console.log(this.bookingObj);
        var id = this.bookingObj.id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__driver_location_driver_location__["a" /* DriverLocationPage */], { "bookingId": id });
    };
    TripDetailsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'cancel...'
        });
        this.loading.present();
    };
    TripDetailsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TripDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-trip-details',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\trip-details\trip-details.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Trip Details</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n<ion-card class="card card-md">\n\n            <img src="./assets/imgs/placeHolder.png">\n\n			\n\n        <div class="card-title"></div>\n\n        <div class="card-subtitle"></div>\n\n        <ion-card-content class="card-content card-content-md">\n\n            <div>\n\n               <strong class="label">FROM : </strong>{{bookingObj.pick_location}}\n\n              </div>\n\n              <div>\n\n                <strong class="label">TO : </strong>{{bookingObj.drop_location}}\n\n               </div>\n\n              <h2 class="status">{{bookingObj.status}}</h2>\n\n                    <h3>Bill Details :</h3>\n\n                        <!-- <p>Invoice Number :<span class="float-right">Rs. 0</span></p> -->\n\n                        <div *ngIf="bookingObj.status == \'complete\'">\n\n                             <p>Total Journey Hours :<span class="float-right">{{totalHM}}</span></p> \n\n                                <p>Ride Hours Charges :<span class="float-right">Rs.{{bookingObj.actualPrice}}</span></p>\n\n                                    <p>Discount :<span class="float-right">Rs.{{bookingObj.discount}}</span></p>\n\n                                        <p>Night Charges :<span class="float-right">Rs. {{bookingObj.night_charge}}</span></p>\n\n                                            <p>Driver Conveyance :<span class="float-right">Rs.{{bookingObj.convPrice}}</span></p>\n\n                                                <p>Total Bill :<span class="float-right">Rs.{{bookingObj.total_fair}}</span></p>\n\n                                                <p *ngIf="bookingObj.extra_charges !=  0" >Festival Extra Charges :<span class="float-right">Rs.{{bookingObj.extra_charges}}</span></p>\n\n                                            </div>\n\n                                            <div class="estimate" *ngIf="bookingObj.status != \'complete\'">\n\n                                                <p>Estimate Price :<span class="float-right">Rs.{{bookingObj.total_fair}}</span></p>\n\n                                            </div>  \n\n                                            <div *ngIf="bookingObj.driver_id != \'0\'">     \n\n                                                <h3 class="label">Driver Details :</h3>\n\n                                                <p>Driver Name :<span class="float-right">{{driverObj.first_name}} {{driverObj.last_name}}</span></p>\n\n                                               \n\n                                                <p>Driver Address :<span class="float-right">{{driverObj.address}}</span></p>\n\n                                   \n\n                                     <div *ngIf="bookingObj.status == \'pending\'">\n\n                                        <p>Driver Mobile No :<span class="float-right">{{driverObj.mobile_no}}</span></p> \n\n                                        <button ion-button round (click)="getDriverLocation()" > <ion-icon name="pin" >  </ion-icon> Track Driver</button>\n\n                                        <ion-fab right bottom>\n\n                                            <button ion-fab color="light" (click)="callInNumber(driverObj.mobile_no)">\n\n                                            <ion-icon name="call"></ion-icon>\n\n                                            </button>\n\n                                            <ion-label>Call Driver</ion-label>   											\n\n                                        </ion-fab>\n\n                                    </div>\n\n                                              <!--  <button ion-button round (click)="callInNumber(driverObj.mobile_no)">\n\n                                                   <ion-icon ios="ios-call" md="md-call" ></ion-icon>\n\n                                                </button>\n\n												-->\n\n                                            </div>    \n\n          </ion-card-content>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\trip-details\trip-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service_share_service__["a" /* ShareService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */]])
    ], TripDetailsPage);
    return TripDetailsPage;
}());

//# sourceMappingURL=trip-details.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__otp_otp__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, registerService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerService = registerService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regData = { username: "", password: "", email: "", rePassword: "", mobileNo: "", zip_code: "", address: "" };
        this.regData = { username: "", password: "", email: "", rePassword: "", mobileNo: "", zip_code: "", address: "" };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.doLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.backToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.afterLogin = function () {
        console.log(this.regData);
        if (this.regValidation(this.regData)) {
            this.regData["dataMode"] = "register";
            //this.regData ={"ataMode":"register","username":"jaipur","password":"pinkcity","email":"jaipur@gmail.com"};
            if (this.regData.rePassword == this.regData.password) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__otp_otp__["a" /* OtpPage */], { "data": this.regData });
            }
            else {
                this.presentToast("Password not Matched.");
            }
        }
    };
    RegisterPage.prototype.regValidation = function (regData) {
        //this.regData =  {username:"",password:"",email:"",rePassword:"",mobileNo:"",zip_code:"",address:""};
        if (regData.username == "") {
            this.presentToast("Please Fill Name.");
            return false;
        }
        else if (regData.password == "") {
            this.presentToast("Please Fill Password.");
            return false;
        }
        else if (regData.email == "") {
            this.presentToast("Please Fill Email Id.");
            return false;
        }
        else if (regData.rePassword == "") {
            this.presentToast("Please Fill Confirm Password.");
            return false;
        }
        else if (regData.mobileNo == "") {
            this.presentToast("Please Fill Mobile No.");
            return false;
        }
        else if (regData.zip_code == "") {
            this.presentToast("Please Fill Zip Code.");
            return false;
        }
        else if (regData.address == "") {
            this.presentToast("Please Fill Address.");
            return false;
        }
        else {
            return true;
        }
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Online Registration</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background">\n    <ion-card>\n      <ion-card-header>\n        Register Form\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list no-line>\n          <ion-item>\n            <ion-input type="text" placeholder="Username" [(ngModel)]="regData.username"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input type="email" placeholder="Email" [(ngModel)]="regData.email"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" [(ngModel)]="regData.password"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="regData.rePassword"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-input type="number" placeholder="Mobile" [(ngModel)]="regData.mobileNo"></ion-input>\n                </ion-item> \n                <ion-item>\n                  <ion-input type="Zip Code" placeholder="Zip Code" [(ngModel)]="regData.zip_code"></ion-input>\n                </ion-item>  \n                <ion-item>\n                  <ion-input type="Address" placeholder=" Address" [(ngModel)]="regData.address"></ion-input>\n                </ion-item>           \n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n   \n  </ion-content>\n\n  <ion-footer>\n      <ion-grid>\n          <ion-row>\n            <ion-col col-6><button ion-button block color="danger" (click)="backToLogin()" ion-start><ion-icon name="arrow-back"></ion-icon> Back</button></ion-col>\n            <ion-col col-6><button ion-button block color="light" (click)="afterLogin()" ion-end>Register  <ion-icon name="arrow-forward"></ion-icon>\n            </button></ion-col>\n            \n          </ion-row>\n        </ion-grid>\n      \n\n  </ion-footer>'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\register\register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/additional-charge/additional-charge.module": [
		868,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://driveronapp.com/Admin/api/';
//let apiUrl = 'http://127.0.0.1/demo/Admin/api/';
//http://127.0.0.1/DriverOnApp/Admin/api/UserApp/index.php
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.sendOtp = function (mobileNo, otp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "sendOtpToNumber", "mobileNo": mobileNo, "otp": otp };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.login = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.getSummaryDetail = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "getBookingDetail", "bookingData": data };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.boookNow = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "bookNow", "bookingData": data };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.getClientProfile = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "getClientProfile", "id": id };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.updateProfile = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "updateProfile", "data": obj };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.changePassword = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "changePassword", "data": obj };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.getBookingHistory = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "getBookingHistory", "id": id };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.getCurrentBooking = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "getCurrentBooking", "id": id };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.getDriverLocation = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "getDriverLocationDetail", "id": id };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.cancelBooking = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "cancelBooking", "id": id };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.getDriverDetail = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "getDriverDetail", "id": id };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.updateReting = function (retingVal, bookingId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var apiData = { "dataMode": "updateReting", "RetVal": retingVal, "bookingId": bookingId };
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.getVersion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "getVersion" };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.checkReting = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var apiData = { "dataMode": "getBookingForDriverRating", "id": id };
            _this.http.post(apiUrl + 'UserApp/index.php', JSON.stringify(apiData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService.prototype.getData = function () {
        this.http.post;
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PostService);
    return PostService;
}());

//# sourceMappingURL=postService.service.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_share_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, menu, storage, share) {
        // this.storage.get('ClientloginId').then(loginId=>{
        //   console.log('ClientloginId: '+ loginId);
        //   if(loginId){
        //   this.share.setClientId(loginId);
        //   this.navCtrl.setRoot(HomePage);
        //   }
        // });
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.storage = storage;
        this.share = share;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
        this.menu.close();
        this.menu.swipeEnable(false);
    };
    WelcomePage.prototype.ionViewWillLeave = function () {
        //this.menu.swipeEnable(true);
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\welcome\welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n\n<ion-content id="welcome-sec">\n     \n  <div id="welcomeContainer">\n   \n  <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n              <h1>Welcome to</h1>\n              <div ><img alt="DriverOnApp" src="./assets/imgs/logo-main.png"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-6><button ion-button block color="danger" (click)="login()">Login</button></ion-col>\n          <ion-col col-6><button ion-button block color="light"  (click)="register()">Register</button></ion-col>\n        </ion-row>\n      </ion-grid>\n  </div>\n    </ion-content>\n  '/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__app_service_share_service__["a" /* ShareService */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__current_booking_current_booking__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingSummaryPage = /** @class */ (function () {
    function BookingSummaryPage(navCtrl, navParams, modal, loadingCtrl, toastCtrl, postService, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.postService = postService;
        this.shareService = shareService;
        //show total booking Time
        this.hours = 0;
        this.minute = 0;
    }
    BookingSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingSummaryPage');
        this.bookingDeail = this.shareService.getBookingDetail();
        this.getBookingSummary(this.bookingDeail);
        console.log(this.bookingDeail);
    };
    BookingSummaryPage.prototype.bookNow = function () {
        console.log(this.bookingSummary);
        this.confirmBook(this.bookingSummary);
        // this.shareService.setDataOnBook(this.bookingSummary);
        // this.navCtrl.push(BookingHistoryPage);
    };
    BookingSummaryPage.prototype.additionalCharge = function () {
        var tripTypeAd = this.bookingSummary["tripType"];
        var additionalModal = this.modal.create('AdditionalChargePage', { tripType: tripTypeAd });
        additionalModal.present();
    };
    BookingSummaryPage.prototype.confirmBook = function (data) {
        var _this = this;
        this.showLoader();
        this.postService.boookNow(data).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            var status = result["success"];
            var msg = result["message"];
            if (status) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__current_booking_current_booking__["a" /* CurrentBookingPage */]); ///push(CurrentBookingPage);
            }
            else {
                _this.presentToast(msg);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    BookingSummaryPage.prototype.getBookingSummary = function (bookinDetail) {
        var _this = this;
        this.showLoader();
        console.log(JSON.stringify(bookinDetail));
        this.postService.getSummaryDetail(bookinDetail).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            _this.bookingSummary = result;
            _this.pickLocation = _this.bookingSummary["pickLocation"];
            _this.dropLocation = _this.bookingSummary["dropLocation"];
            _this.startTime = _this.bookingSummary["startTime"];
            _this.endTime = _this.bookingSummary["endTime"];
            _this.carType = _this.shareService.carObj[_this.bookingSummary["carType"]];
            _this.gearType = _this.shareService.gearObj[_this.bookingSummary["gearType"]];
            _this.tripType = _this.shareService.tripObj[_this.bookingSummary["tripType"]];
            _this.convFees = _this.bookingSummary["convenience"];
            _this.tax = _this.bookingSummary["taxValue"];
            _this.charge = _this.bookingSummary["actualPrice"];
            _this.discount = _this.bookingSummary["DiscountValue"];
            _this.extraCharges = _this.bookingSummary["extra_charges"];
            _this.finalFee = _this.bookingSummary["total"];
            _this.nightCharge = _this.bookingSummary["nightCharge"];
            var totalMinute = _this.bookingSummary["minuteDiff"];
            _this.hours = Math.floor(totalMinute / 60);
            _this.minute = totalMinute % 60;
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    BookingSummaryPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Calculating...'
        });
        this.loading.present();
    };
    BookingSummaryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    BookingSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-booking-summary',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\booking-summary\booking-summary.html"*/'<!--\n\n  Generated template for the BookingSummaryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Booking Summary</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="bookSummary">\n\n    <p><strong class="label">FROM</strong> : {{pickLocation}}</p>\n\n    <p><strong class="label">TO</strong> : {{dropLocation}}</p>\n\n    <ul>\n\n      <li>\n\n        <h4>Start Date/Time</h4>\n\n        <p>{{startTime}}</p>\n\n      </li>\n\n      <li>\n\n        <h4>End Date/Time</h4>\n\n        <p>{{endTime}}</p>\n\n      </li>\n\n      <li>\n\n        <h4>Total Time</h4>\n\n        <p>{{hours}} hours {{minute}} minutes</p>\n\n      </li>\n\n      <li>\n\n        <h4>Car - Gear Type</h4>\n\n        <p>{{carType}} -{{gearType}}</p>\n\n      </li>\n\n      <li>\n\n        <h4>Booking Type</h4>\n\n        <p>{{tripType}}</p>\n\n      </li>\n\n      <li>\n\n        <h4>Estimated Charge</h4>\n\n        <p>Rs. {{charge}}</p>\n\n      </li>\n\n      <li>\n\n        <h4>Night Charge</h4>\n\n        <p>Rs. {{nightCharge}}</p>\n\n      </li>\n\n      <li>\n\n        <h4>Conveyance Charges</h4>\n\n        <p>Rs. {{convFees}}</p>\n\n      </li>\n\n      <li>\n\n        <h4>Tax</h4>\n\n        <p>Rs. {{tax}}</p>\n\n      </li>\n\n      <li *ngIf="discount !=  0">\n\n        <h4>Discount</h4>\n\n        <p>Rs. {{discount}}</p>\n\n      </li>\n\n      <li *ngIf="extraCharges !=  0">\n\n        <h4>Festival Extra Charges</h4>\n\n        <p>Rs. {{extraCharges}}</p>\n\n      </li>\n\n      <li >\n\n        <h4>Final Est. Charges</h4>\n\n        <p>Rs. {{finalFee}}</p>\n\n      </li>\n\n    </ul>\n\n    <p>Note: Estimated Charges may differ depend upon actual total journey hours.</p>\n\n    <button large ion-button block block medium color="dark" (click)="additionalCharge()">\n\n    ADDITIONAL CHARGES\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button (click)="bookNow()" color="light" ion-button block icon-end> BOOK\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\booking-summary\booking-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__app_service_share_service__["a" /* ShareService */]])
    ], BookingSummaryPage);
    return BookingSummaryPage;
}());

//# sourceMappingURL=booking-summary.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DriverLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverLocationPage = /** @class */ (function () {
    function DriverLocationPage(navCtrl, geo, navParams, platform, loadingCtrl, toastCtrl, postService, shareService, launchNavigator) {
        this.navCtrl = navCtrl;
        this.geo = geo;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.postService = postService;
        this.shareService = shareService;
        this.launchNavigator = launchNavigator;
        this.bookingId = this.navParams.get('bookingId');
        console.log(this.bookingId);
        this.platform.ready().then(function () {
        });
    }
    DriverLocationPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    DriverLocationPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.interval);
    };
    DriverLocationPage.prototype.loadMap = function () {
        var _this = this;
        var pageObj = this;
        this.geo.getCurrentPosition().then(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            pageObj.getDriverLocation();
        }, function (err) {
            console.log(err);
        });
    };
    DriverLocationPage.prototype.getDriverLocation = function () {
        var _this = this;
        var id = this.bookingId;
        this.postService.getDriverLocation(id).then(function (result) {
            console.log(result);
            _this.bookingObj = result["data"];
            _this.setDriverLocation();
        }, function (err) {
            _this.presentToast(err);
        });
    };
    DriverLocationPage.prototype.setDriverLocation = function () {
        var pageObj = this;
        var obj = this.bookingObj;
        this.originLat = obj["driverLat"];
        this.originLng = obj["driverLng"];
        if (obj["arrived_time"] == "0000-00-00 00:00:00") {
            this.DesLat = obj["latitude"];
            this.DesLng = obj["longitude"];
        }
        else {
            this.DesLat = obj["desLat"];
            this.DesLng = obj["desLng"];
        }
        if (this.directionsDisplay != undefined) {
            this.directionsDisplay.setMap(null);
        }
        this.drawRoute();
        this.setDriverMarker();
        this.interval = setInterval(function () { pageObj.moveDriverMarker(); }, 3000);
    };
    DriverLocationPage.prototype.setDriverMarker = function () {
        var dLat = this.bookingObj.driverLat;
        var dLng = this.bookingObj.driverLng;
        var center = new google.maps.LatLng(dLat, dLng);
        this.myMarker = new google.maps.Marker({
            position: center,
            draggable: false,
            map: this.map,
            icon: "assets/imgs/driver_icon.png"
        });
        this.myMarker.setMap(this.map);
    };
    DriverLocationPage.prototype.moveDriverMarker = function () {
        var _this = this;
        var id = this.bookingId;
        this.postService.getDriverLocation(id).then(function (result) {
            console.log(result);
            _this.bookingObj = result["data"];
            var dLat = _this.bookingObj.driverLat;
            var dLng = _this.bookingObj.driverLng;
            var center = new google.maps.LatLng(dLat, dLng);
            _this.myMarker.setPosition(center);
        }, function (err) {
            _this.presentToast(err);
        });
    };
    DriverLocationPage.prototype.drawRoute = function () {
        var _this = this;
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
        var originPlace = new google.maps.LatLng(latitude, longitude);
        var destination = new google.maps.LatLng(desLat, desLng);
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(this.map);
        // this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        this.directionsService.route({
            origin: originPlace,
            destination: destination,
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                // this.directionsDisplay.setDirections(res);
                new google.maps.DirectionsRenderer({
                    map: _this.map,
                    directions: response,
                    suppressMarkers: true
                });
                var leg = response.routes[0].legs[0];
                _this.makeMarkerStart(leg.start_location, "", "title", _this.map);
                _this.makeMarkerEnd(leg.end_location, "", 'title', _this.map);
            }
            else {
                console.warn(status);
            }
        });
    };
    DriverLocationPage.prototype.makeMarkerStart = function (position, icon, title, map) {
        new google.maps.Marker({
            position: position,
            map: map,
            icon: "assets/imgs/client.png",
            title: title
        });
    };
    DriverLocationPage.prototype.makeMarkerEnd = function (position, icon, title, map) {
        new google.maps.Marker({
            position: position,
            map: map,
            icon: "assets/imgs/endIcon.png",
            title: title
        });
    };
    DriverLocationPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Calculating...'
        });
        this.loading.present();
    };
    DriverLocationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DriverLocationPage.prototype, "mapElement", void 0);
    DriverLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-driver-location',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\driver-location\driver-location.html"*/'<!--\n  Generated template for the DriverLocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n   <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Track your Ride</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- <ion-card>\n    <ion-card-content>\n        <div #directionsPanel></div>\n    </ion-card-content>\n</ion-card> -->\n \n<div #map id="map"></div> \n\n<!-- <ion-fab right bottom (click)="startNavigation()">\n  \n<button ion-fab color="light"  >\n   <ion-icon name="expand" ></ion-icon>\n</button>  \n                      \n</ion-fab> -->\n\n</ion-content>\n\n<!-- <ion-footer color="dark">\n<button  ion-button large block color="light" (click)="updateArrivedTime()">\n  <ion-icon name="paper-plane" item-start></ion-icon>Tap When Arrived</button>\n</ion-footer> -->\n\n\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\driver-location\driver-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_4__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], DriverLocationPage);
    return DriverLocationPage;
}());

//# sourceMappingURL=driver-location.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RetingPage = /** @class */ (function () {
    function RetingPage(navCtrl, navParams, loadingCtrl, toastCtrl, postService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.postService = postService;
        this.retingVal = 0;
        this.rate = 3;
        this.driverObj = {
            first_name: '',
            last_name: '',
            mobile_no: '',
            address: ''
        };
        this.bookingObj = this.navParams.get('data');
    }
    RetingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RetingPage');
        this.bookingId = this.bookingObj["id"];
        var driverId = this.bookingObj["driver_id"];
        this.getDriverDetail(driverId);
    };
    RetingPage.prototype.onModelChange = function (event) {
        console.log(event);
        this.retingVal = event;
    };
    RetingPage.prototype.submit = function () {
        //this.navCtrl.setRoot(RideInitiatePage);
        this.setReting();
    };
    RetingPage.prototype.setReting = function () {
        var _this = this;
        var retingVal = this.retingVal;
        var bookingId = this.bookingId;
        this.postService.updateReting(retingVal, bookingId).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            var status = result["status"];
            if (status) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                var msg = result["message"];
                _this.presentToast(msg);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    RetingPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    RetingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RetingPage.prototype.getDriverDetail = function (id) {
        var _this = this;
        this.showLoader();
        this.postService.getDriverDetail(id).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            _this.driverObj = result["data"];
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    RetingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reting',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\reting\reting.html"*/'<!--\n  Generated template for the RetingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar>\n    <ion-title>Feedback</ion-title>\n  </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n  \n      <ion-card class="card card-md">\n          <img src="./assets/imgs/placeHolder.png">\n      <div class="card-title"></div>\n      <div class="card-subtitle"></div>\n      <ion-card-content class="card-content card-content-md">\n          <ion-card-title class="card-title card-title-sm">\n             FROM: {{bookingObj.pick_location}}\n            </ion-card-title>\n            <ion-card-title class="card-title card-title-sm">\n              TO: {{bookingObj.drop_location}}\n             </ion-card-title>\n            <h2>{{bookingObj.status}}</h2>\n                  <h3>Bill Details :</h3>\n                      <!-- <p>Invoice Number :<span class="float-right">Rs. 0</span></p> -->\n                      <div *ngIf="bookingObj.status == \'complete\'">\n                           <p>Total Journey Hours :<span class="float-right">{{totalHM}}</span></p> \n                              <p>Ride Hours Charges :<span class="float-right">Rs.{{bookingObj.actualPrice}}</span></p>\n                                  <p>Discount :<span class="float-right">Rs.{{bookingObj.discount}}</span></p>\n                                      <p>Night Charges :<span class="float-right">Rs. {{bookingObj.night_charge}}</span></p>\n                                          <p>Driver Conveyance :<span class="float-right">Rs.{{bookingObj.convPrice}}</span></p>\n                                              <p>Total Bill :<span class="float-right">Rs.{{bookingObj.total_fair}}</span></p>\n                                          </div>\n                                          <div *ngIf="bookingObj.status != \'complete\'">\n                                              <p>Estimate Price :<span class="float-right">Rs.{{bookingObj.total_fair}}</span></p>\n                                          </div>   \n                                          <div *ngIf="bookingObj.driver_id != \'0\'">     \n                                              <h3>Driver Details :</h3>\n                                              <p>Driver Name:<span class="float-right">{{driverObj.first_name}} {{driverObj.last_name}}</span></p>\n                                              <p>Driver Mobile NO:<span class="float-right">{{driverObj.mobile_no}}</span></p>\n                                              <p>Driver Address:<span class="float-right">{{driverObj.address}}</span></p>\n                                              <!-- <button ion-button round (click)="callInNumber(driverObj.mobile_no)">\n                                                 <ion-icon ios="ios-call" md="md-call" ></ion-icon>\n                                              </button> -->\n                                          </div>    \n        </ion-card-content>\n    </ion-card>\n    \n    <rating [(ngModel)]="rate" \n      readOnly="false" \n      max="5" \n      emptyStarIconName="star-outline" \n      halfStarIconName="star-half"\n      starIconName="star" \n      nullable="false"\n      (ngModelChange)="onModelChange($event)" > <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n    </rating>\n  \n  </ion-content>\n  \n  \n  <ion-footer color="dark">\n  <button ion-button large block color="light" (click)="submit()">\n    Submit</button>\n  \n  </ion-footer>\n  '/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\reting\reting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_postService_service__["a" /* PostService */]])
    ], RetingPage);
    return RetingPage;
}());

//# sourceMappingURL=reting.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams, registerService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerService = registerService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isenabled = false;
        this.regData = this.navParams.get('data');
        this.mobileNo = this.regData.mobileNo;
        this.sendOtpToNumber();
        var options = {
            delimiter: "code is",
            length: 6,
            origin: "WAYSMS"
        };
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
    };
    OtpPage.prototype.submit = function (val) {
        if (val == this.originalOtp) {
            //alert("Otp Matched");
            this.registerUser();
        }
        else {
            alert("Please try Again Invalid OTP");
        }
    };
    OtpPage.prototype.reSendOtp = function () {
        this.isenabled = false;
        this.sendOtpToNumber();
    };
    OtpPage.prototype.sendOtpToNumber = function () {
        var _this = this;
        var obj = this;
        setTimeout(function () { obj.isenabled = true; }, 30000);
        var val = Math.floor(1000 + Math.random() * 9000);
        var mobileNo = this.mobileNo;
        this.showLoader();
        this.registerService.sendOtp(mobileNo, val).then(function (result) {
            _this.loading.dismiss();
            _this.originalOtp = val;
        }, function (err) {
            _this.originalOtp = null;
            _this.loading.dismiss();
            _this.presentToast("Error To send OTP. Please Try Again");
        });
    };
    OtpPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    OtpPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    OtpPage.prototype.registerUser = function () {
        var _this = this;
        console.log(this.regData);
        this.regData["dataMode"] = "register";
        this.showLoader();
        this.registerService.register(this.regData).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            _this.resData = result;
            if (_this.resData.success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.presentToast(_this.resData.message);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\otp\otp.html"*/'<!--\n  Generated template for the OtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <ion-title>otp</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content class="background">\n  <ion-card>\n      <h2>Sit back & Relax! while we varify your mobile number</h2>\n      <P>(Enter the OTP below in case if we fail to detect the SMS automatically)</P>\n    \n    <ion-card-content>\n      <ion-list no-line>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="otpValue" placeholder="Enter OTP"></ion-input>\n        </ion-item>\n          <button ion-button block outline color="light" (click)="submit(otpValue)">SUBMIT</button>\n          <button ion-button clear full id="resendBtn" color="light" (click)="reSendOtp()"  [disabled]="!isenabled">Resend OTP</button>    \n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\otp\otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service_postService_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, shareService, postService, loadingCtrl, toastCtrl, platform, camera, transfer, file, filePath, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareService = shareService;
        this.postService = postService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.lastImage = null;
        var id = shareService.getClientId();
        this.profileImage = "http://driveronapp.com/Admin/api/UserApp/uploads/" + id + ".jpg?v=" + new Date().getTime();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var id = this.shareService.getClientId();
        this.getClientProfile(id);
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getClientProfile = function (id) {
        var _this = this;
        this.showLoader();
        this.postService.getClientProfile(id).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            var profileObj = result["data"];
            _this.firstName = profileObj["name"];
            _this.lastName = profileObj[""];
            _this.email_id = profileObj["email_id"];
            _this.mobile_no = profileObj["mobile_no"];
            _this.address = profileObj["address"];
            _this.zip_code = profileObj["zip_code"];
            // this.lastImage = "http://driveronapp.com/Admin/api/UserApp/uploads/"+id+".jpg";
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    ProfilePage.prototype.updateProfile = function () {
        var _this = this;
        var id = this.shareService.getClientId();
        var obj = { "id": id, "name": this.firstName, "email_id": this.email_id, "mobile_no": this.mobile_no,
            "address": this.address, "zip_code": this.zip_code };
        this.showLoader();
        this.postService.updateProfile(obj).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            var status = result["status"];
            if (status == true) {
                _this.presentToast("successFully Save.");
                //this.getClientProfile(id);
            }
            else {
                _this.presentToast("Error in Save. Please try again.");
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    ProfilePage.prototype.updatePassword = function () {
        var _this = this;
        var id = this.shareService.getClientId();
        var obj = { "id": id, "newPassword": this.password };
        this.showLoader();
        this.postService.changePassword(obj).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            var status = result["status"];
            if (status == true) {
                _this.presentToast("successFully Save.");
                _this.password = "";
                _this.confirm_password = "";
                //this.getClientProfile(id);
            }
            else {
                _this.presentToast("Error in Save. Please try again.");
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    ProfilePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    ProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    //upload profile image code 
    ProfilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ///helper function 
    ProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    //path function 
    // Create a new name for the image
    ProfilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ProfilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    // Always get the accurate path to your apps folder
    ProfilePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    //upload Image to server 
    ProfilePage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = "http://driveronapp.com/Admin/api/UserApp/upload.php";
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        var id = this.shareService.getClientId();
        // File name only
        var filename = id + ".jpg"; //this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, "id": id }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('Image succesful uploaded.');
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Profile</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content >\n    <ion-card>\n\n        <!-- <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n         \n         <img [src]="profileImage" onerror="this.src=\'assets/imgs/profileImage.jpg\';"\n         [hidden]="lastImage !== null"> -->\n\n       <img src="assets/imgs/profileImage.jpg">\n        <div class="card-title">Mr. {{firstName}}</div>\n        <!-- <div class="card-subtitle">28 Listings</div> -->\n        <!-- <div class="card-subtitle" (click)="clickImage()">upload pic</div>  -->\n\n        <!-- <ion-toolbar color="primary">\n            <ion-buttons>\n              <button ion-button icon-left (click)="presentActionSheet()">\n                <ion-icon name="camera"></ion-icon>Select Image\n              </button>\n              <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n                <ion-icon name="cloud-upload"></ion-icon>Upload\n              </button>\n            </ion-buttons>\n          </ion-toolbar> -->\n\n      </ion-card>\n\n      <ion-list>\n          <ion-item>\n            <h3 class="text-center">First Name</h3>\n            <ion-input placeholder="Name" [(ngModel)]="firstName"  ></ion-input>\n          </ion-item>\n          <!-- <ion-item>\n              <h2>Second Name</h2>\n              <p>{{lastName}</p>\n            </ion-item> -->\n            <ion-item>\n                <h2>Email</h2>\n                <ion-input placeholder="Email Id" [(ngModel)]="email_id"  ></ion-input>\n              </ion-item>\n                  <ion-item>\n                      <h2> Mobile Number</h2>\n                      <ion-input placeholder="Mobile No." [(ngModel)]="mobile_no"  ></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <h2> Address</h2>\n                      <ion-input placeholder="Address" [(ngModel)]="address"  ></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <h2>Zip Code</h2>\n                      <ion-input placeholder="Zip Code" [(ngModel)]="zip_code"  ></ion-input>\n                    </ion-item>\n                    \n                    <ion-item>\n                      <button color="light" ion-button block large (click)="updateProfile()">Save</button>\n                      </ion-item>\n        </ion-list>\n    \n        \n\n        <ion-list>\n              \n			  <h4 class="text-center">Change Password</h4>\n              <ion-item>\n                  <h2>New Pasword</h2>\n                  <ion-input placeholder="New password" [(ngModel)]="password"  ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <h2>Confirm New Pasword</h2>\n                    <ion-input placeholder="Confirm Password" [(ngModel)]="confirm_password"  ></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <button color="light" ion-button large block [disabled]="password != confirm_password" (click)="updatePassword()">Change Password</button>\n					</ion-item>\n                     \n        </ion-list>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3__app_service_postService_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trip_details_trip_details__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_postService_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BookingHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



var BookingHistoryPage = /** @class */ (function () {
    function BookingHistoryPage(navCtrl, navParams, shareService, postService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareService = shareService;
        this.postService = postService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.bookingData = [];
        var clientId = this.shareService.getClientId();
        this.getBokingHistory(clientId);
    }
    BookingHistoryPage.prototype.ionViewDidLoad = function () {
        // var clientId = this.shareService.getClientId();
        //this.getBokingHistory(clientId);
        console.log('ionViewDidLoad BookingHistoryPage');
        // var clientId = this.shareService.getClientId();
        //this.getBokingHistory(clientId);
    };
    BookingHistoryPage.prototype.getBokingHistory = function (id) {
        var _this = this;
        this.showLoader();
        this.postService.getBookingHistory(id).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            _this.bookingData = result;
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    BookingHistoryPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    BookingHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    BookingHistoryPage.prototype.tripDetail = function (obj) {
        console.log(obj);
        this.shareService.setTripDetail(obj);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__trip_details_trip_details__["a" /* TripDetailsPage */]);
    };
    BookingHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-booking-history',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\booking-history\booking-history.html"*/'<!--\n  Generated template for the BookingHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="primary">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Booking History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n<h3 padding>Booking History</h3>\n<ion-card *ngFor="let data of bookingData" (click)="tripDetail(data)">\n  <img src="./assets/imgs/placeHolder.png"/>\n  <div class="card-title"></div>\n  <div class="card-subtitle"></div>\n  <ion-card-content>\n      <h2>\n          {{data.start_time}} <span class="float-right">Rs.{{data.total_fair}}</span>\n        </h2>\n      <p>\n          Hourly <span class="float-right">Rs. {{data.actualPrice}}</span>\n      </p>\n    </ion-card-content>\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\booking-history\booking-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_4__app_service_postService_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], BookingHistoryPage);
    return BookingHistoryPage;
}());

//# sourceMappingURL=booking-history.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverChargesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DriverChargesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverChargesPage = /** @class */ (function () {
    function DriverChargesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.charge_1 = true;
        this.charge_2 = false;
        this.charge_3 = false;
    }
    DriverChargesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverChargesPage');
    };
    DriverChargesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-driver-charges',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\driver-charges\driver-charges.html"*/'<!--\n  Generated template for the DriverChargesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Driver Charges</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n<h3>Local</h3>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6><h4>Hours</h4></ion-col>\n        <ion-col col-6><h4>Charges</h4></ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-6><p>0-4</p></ion-col>\n          <ion-col col-6><p>71/ Per Hour</p></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6><p>4-8</p></ion-col>\n            <ion-col col-6><p>47/ Per Hour</p></ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-6><p>8 onwords</p></ion-col>\n              <ion-col col-6><p>31/ Per Hour</p></ion-col>\n            </ion-row>\n    </ion-grid>\n<ion-list *ngIf="charge_1" id="travelStep_1">\n<p>Tax As Applicable 1</p>\n<h4>Additional Charges</h4>\n<p>Following are as Per Market Standards:</p>\n<ul>\n  <li>Driver Conveyance Charges of Rs. 50 is Applicables for Local Bookings.</li>\n  <li>Night Travelling Allowance of Rs. 100 is Applicable for Local Booking Starting/ Ending Between 12AM to 4AM</li>\n</ul>\n</ion-list>\n<ion-list *ngIf="charge_2" id="travelStep_2">\n    <p>Tax As Applicable 2</p>\n    <h4>Additional Charges</h4>\n    <p>Following are as Per Market Standards:</p>\n    <ul>\n      <li>Driver Conveyance Charges of Rs. 50 is Applicables for Local Bookings.</li>\n      <li>Night Travelling Allowance of Rs. 100 is Applicable for Local Booking Starting/ Ending Between 12AM to 4AM</li>\n    </ul>\n    </ion-list>\n    <ion-list *ngIf="charge_2" id="travelStep_2">\n        <p>Tax As Applicable 1</p>\n        <h4>Additional Charges</h4>\n        <p>Following are as Per Market Standards:</p>\n        <ul>\n          <li>Driver Conveyance Charges of Rs. 50 is Applicables for Local Bookings.</li>\n          <li>Night Travelling Allowance of Rs. 100 is Applicable for Local Booking Starting/ Ending Between 12AM to 4AM</li>\n        </ul>\n        </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\driver-charges\driver-charges.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DriverChargesPage);
    return DriverChargesPage;
}());

//# sourceMappingURL=driver-charges.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpSupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HelpSupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpSupportPage = /** @class */ (function () {
    function HelpSupportPage(navCtrl, navParams, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
    }
    HelpSupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpSupportPage');
    };
    HelpSupportPage.prototype.callInNumber = function (no) {
        this.callNumber.callNumber(no, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HelpSupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-help-support',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\help-support\help-support.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Help and Support</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h4>DriverOnApp Provide verified and Professional driver for your car.</h4>\n<p>Coing for a toure is a sacrifice towards safety and comfort and your get maximum comfort in your own car and feel safe like at home. But whenever\nyour require a Driver you either got a taxi or a "driver on a fixed salary". There are few of basic worries in mind of any car owner in town, idea is to avoid these\n  worries. And provide a feasible solution. That is here.\n</p>\n<p>\nWe at DriverOnApp provide hourly paid trained Drivers who would take you to your destination in your own cr and on your convenient time\nand date. There will not be question on minimum kms of driver, that is gnerally in case of hiring a taxi. And you are flexible to take Drivers on a Complete tour, half\n tour or merely for few hours. We believe with DriverOnApp, your fourney would be comfortable as never before.\n</p>\n<p>for contact, please visit at <strong>DriverOnApp</strong></p>\n\n<h3>Address:</h3>\n<p>F-16, Sumer Nagar, Behind Cheel Gaddi Restaurent, Patel Marg, Mansarowar, Jaipur</p>\n\n\n<ion-fab right bottom>\n  \n<button ion-fab color="light" (click)="callInNumber(9462998080)">\n   <ion-icon name="call"></ion-icon> \n</button>\n<ion-label>Customer Care</ion-label>   \n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\help-support\help-support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], HelpSupportPage);
    return HelpSupportPage;
}());

//# sourceMappingURL=help-support.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SharePage = /** @class */ (function () {
    function SharePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeUrl = "http:driveronapp.com";
        this.description = "Application where you can book your driver according to  hourly payment.";
        this.title = "DriverOnApp";
    }
    SharePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharePage');
    };
    SharePage.prototype.shareRecipe = function () {
        var options = {
            message: 'Application where you can book your driver according to  hourly payment.',
            subject: 'driverONApp',
            url: 'https://play.google.com/store/apps/details?id=com.singhal.driverOnApp',
            chooserTitle: 'Share via...'
        };
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* SocialSharing */].shareWithOptions(options).then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-share',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\share\share.html"*/'<!--\n  Generated template for the SharePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Every Little Helps</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card class="card card-md">\n            <img src="./assets/imgs/placeHolder.png">\n<ion-card-content>    \n	<ion-card-title>\n		Designed for Driving Pleasure\n      </ion-card-title>\n	  \n    \n		\n  <button ion-button block color="light" (click)="shareRecipe()">\n    <ion-icon name="share-alt"></ion-icon> \n  </button>\n  </ion-card-content>    \n  </ion-card >\n\n</ion-content>\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\share\share.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = /** @class */ (function () {
    // tripType: string;
    // carType: string;
    // gearType:String;
    // pickLocation:any;
    // startTime:any;
    // endTime:any;
    function ShareService() {
        this.tripDetail = {};
        this.appVersion = '37';
        this.isHomePageFlag = false;
        this.tripObj = {
            "local": "Local",
            "oneway": "One Way Trip",
            "outstation": "Outstation Trip"
        };
        this.carObj = {
            "small": "Small",
            "medium": "Medium",
            "large": "Large",
            "luxury": "Luxury"
        };
        this.gearObj = {
            "manual": "Manual",
            "auto": "Automatioc"
        };
        this.BookingDetailJson = {
            clientId: 0,
            tripType: "",
            carType: "",
            gearType: "",
            pickLocation: '',
            dropLocation: '',
            startTime: '',
            endTime: '',
            minuteDiff: '',
            latitude: '',
            longitude: ''
        };
        this.clientId = 0;
        this.dataOnBook = {};
    }
    ShareService.prototype.getVersion = function () {
        return this.appVersion;
    };
    ShareService.prototype.setBookingDetail = function (obj) {
        this.BookingDetailJson = obj;
    };
    ShareService.prototype.getBookingDetail = function () {
        // return this.firstName + ' ' + this.lastName;
        return this.BookingDetailJson;
    };
    ShareService.prototype.setClientId = function (id) {
        this.clientId = id;
    };
    ShareService.prototype.getClientId = function () {
        return this.clientId;
    };
    ShareService.prototype.setDataOnBook = function (val) {
        this.dataOnBook = val;
    };
    ShareService.prototype.getDataOnBook = function () {
        return this.dataOnBook;
    };
    ShareService.prototype.setTripDetail = function (obj) {
        this.tripDetail = obj;
    };
    ShareService.prototype.getTripDetail = function () {
        return this.tripDetail;
    };
    ShareService.prototype.getTotalHMTime = function (t2, t1) {
        //"2018-05-23 15:44:00"
        var dt2 = new Date(t2);
        var dt1 = new Date(t1);
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        var totalMinute = Math.abs(Math.round(diff));
        var hours = Math.floor(totalMinute / 60);
        var minute = totalMinute % 60;
        var TotalHM = hours + " Hours:" + minute + " Minutes";
        return TotalHM;
    };
    ShareService.prototype.isHomePage = function () {
        return this.isHomePageFlag;
    };
    ShareService.prototype.setIsHomePage = function (val) {
        this.isHomePageFlag = val;
    };
    ShareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShareService);
    return ShareService;
}());

//# sourceMappingURL=share.service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booking_summary_booking_summary__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_market__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reting_reting__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, mapsAPILoader, ngZone, shareService, diagnostic, platform, geolocation, locationAccuracy, postService, alertCtrl, market, toastCtrl, ref, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.shareService = shareService;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.postService = postService;
        this.alertCtrl = alertCtrl;
        this.market = market;
        this.toastCtrl = toastCtrl;
        this.ref = ref;
        this.menu = menu;
        this.isLocationSet = false;
        this.minDate = new Date().toISOString().split('T')[0]; // new Date().toJSON().split('T')[0];  //
        this.dateObj = new Date();
        this.year = this.dateObj.getFullYear() + 1;
        this.nextYear = this.dateObj.setFullYear(this.year);
        this.maxDate = this.dateObj.toISOString().split('T')[0];
        this.bookingObj = {
            clientId: 0,
            tripType: "",
            carType: "",
            gearType: "",
            pickLocation: '',
            dropLocation: '',
            startTime: '',
            endTime: '',
            minuteDiff: '',
            latitude: '',
            longitude: '',
            desLat: '',
            desLng: ''
        };
        this.obj = this;
        this.companies = 0;
        this.step_1 = true;
        this.step_2 = false;
        this.step_3 = false;
        this.step_4 = false;
        this.shareService.setIsHomePage(true);
        this.menu.swipeEnable(true);
        console.log("minDate mani---->" + this.minDate);
        this.zoom = 10;
        var homePageObj = this;
        this.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
            _this.geolocation.getCurrentPosition(options).then(function (resp) {
                homePageObj.isLocationSet = true;
                console.log(resp);
                console.log(resp.coords);
                _this.latitude = resp.coords.latitude;
                _this.longitude = resp.coords.longitude;
                homePageObj.zoom = 18;
                var geocoder = new google.maps.Geocoder();
                var latLng = new google.maps.LatLng(_this.latitude, _this.longitude);
                var geocodeOption = {
                    'latLng': latLng
                };
                if (geocoder) {
                    geocoder.geocode(geocodeOption, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            console.log(results[0].formatted_address);
                            console.log('Address:' + results[0].formatted_address);
                            homePageObj.bookingObj["pickLocation"] = results[0].formatted_address;
                            //document.getElementById('txtHome').getElementsByTagName('input')[0].value = results[0].formatted_address;
                            homePageObj.myMarker.setPosition(latLng);
                            homePageObj.ref.detectChanges();
                        }
                        else {
                            console.log("Geocoding failed: " + status);
                        }
                    });
                }
            }).catch(function () {
                console.log("Error to get location");
                //set google maps defaults
                _this.latitude = 26.9124;
                _this.longitude = 75.7873;
                homePageObj.setCurrentPosition();
            });
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.shareService.setIsHomePage(true);
        //set google maps defaults
        this.checkVersion();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.shareService.setIsHomePage(true);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.shareService.setIsHomePage(false);
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.shareService.setIsHomePage(false);
    };
    HomePage.prototype.mapReady = function (map) {
        this.map = map;
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        var homePageObj = this;
        var center = new google.maps.LatLng(this.latitude, this.longitude);
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
            homePageObj.setAddressOnDrag(lat, lng);
            ///}
        }
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var mapOptions = {
                mapTypeId: google.maps.MapTypeId.HYBRID,
                mapTypeControl: false,
                panControl: false,
                streetViewControl: false,
                zoomControl: true,
                componentRestrictions: { country: "IND" },
            };
            //pick up location work
            var nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
            var autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, mapOptions);
            //new google.maps.places.Autocomplete(nativeHomeInputBox,autocompleteOption);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    _this.bookingObj.pickLocation = place.formatted_address;
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 18;
                    var latLng = new google.maps.LatLng(_this.latitude, _this.longitude);
                    homePageObj.myMarker.setPosition(latLng);
                    homePageObj.ref.detectChanges();
                });
            });
            //destination work 
            var nativeDesInputBox = document.getElementById('textDes').getElementsByTagName('input')[0];
            var autocompleteDes = new google.maps.places.Autocomplete(nativeDesInputBox, mapOptions);
            autocompleteDes.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var placeDes = autocompleteDes.getPlace();
                    _this.bookingObj.dropLocation = placeDes.formatted_address;
                    //verify result
                    if (placeDes.geometry === undefined || placeDes.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.bookingObj.desLat = placeDes.geometry.location.lat();
                    _this.bookingObj.desLng = placeDes.geometry.location.lng();
                    // this.zoom = 12;
                    homePageObj.ref.detectChanges();
                });
            });
        });
    };
    //   markerMoved(event){
    //         console.log(event);
    //         this.setAddressOnDrag(lat,lng);
    //   }
    HomePage.prototype.setAddressOnDrag = function (lat, lng) {
        var obj = this;
        console.log(lat);
        this.latitude = lat;
        this.longitude = lng;
        console.log(this.latitude);
        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        var geocodeOption = {
            'latLng': latLng
        };
        if (geocoder) {
            geocoder.geocode(geocodeOption, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results[0].formatted_address);
                    console.log('Address:' + results[0].formatted_address);
                    obj.bookingObj["pickLocation"] = results[0].formatted_address;
                    obj.ref.detectChanges();
                    //document.getElementById('txtHome').getElementsByTagName('input')[0].value = results[0].formatted_address;
                }
                else {
                    console.log("Geocoding failed: " + status);
                }
            });
        }
    };
    HomePage.prototype.setCurrentPosition = function () {
        var _this = this;
        this.diagnostic.isLocationEnabled()
            .then(function (state) {
            if (state) {
                console.log("location on");
                _this.getCurrentPosition();
            }
            else {
                _this.diagnostic.switchToLocationSettings();
                _this.getCurrentPosition();
            }
        }).catch(function (e) { return console.error(e); });
    };
    HomePage.prototype.getCurrentPosition = function () {
        var _this = this;
        var homePageObj = this;
        var options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            homePageObj.isLocationSet = true;
            console.log(resp);
            console.log(resp.coords);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            _this.zoom = 18;
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(_this.latitude, _this.longitude);
            var geocodeOption = {
                'latLng': latLng
            };
            if (geocoder) {
                geocoder.geocode(geocodeOption, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log(results[0].formatted_address);
                        console.log('Address:' + results[0].formatted_address);
                        homePageObj.bookingObj["pickLocation"] = results[0].formatted_address;
                        //document.getElementById('txtHome').getElementsByTagName('input')[0].value = results[0].formatted_address;
                        homePageObj.myMarker.setPosition(latLng);
                        homePageObj.ref.detectChanges();
                    }
                    else {
                        console.log("Geocoding failed: " + status);
                    }
                });
            }
        }).catch(function () {
            console.log("Error to get location");
            //set google maps defaults
        });
    };
    HomePage.prototype.bookingSummary = function () {
        var strStartTime = this.bookingObj.startTime;
        var pickdt = strStartTime.replace("T", ' ');
        pickdt = pickdt.replace("Z", '');
        var strEndTime = this.bookingObj.endTime;
        var dropdt = strEndTime.replace("T", ' ');
        dropdt = dropdt.replace("Z", '');
        var curDatePlus1Hr;
        var d = new Date();
        d.setHours(d.getHours() + 1);
        curDatePlus1Hr = new Date(d);
        console.log(curDatePlus1Hr);
        var pickUpTime;
        pickUpTime = new Date(pickdt);
        var minuteDIff = this.diff_minutes(this.bookingObj.startTime, this.bookingObj.endTime);
        if (this.bookingObj.startTime == "" || this.bookingObj.endTime == "") {
            this.presentToast("Please select start trip time and End trip time. ");
        }
        else {
            if (this.bookingObj.startTime == this.bookingObj.endTime) {
                this.presentToast("Please select End trip time different from Start time. ");
            }
            else if ((Date.parse(dropdt) <= Date.parse(pickdt))) {
                this.presentToast("End time should be greater than Start time");
            }
            else if ((Date.parse(curDatePlus1Hr) > Date.parse(pickUpTime))) {
                this.presentToast("Start time should be 60 minutes greater than Current time");
            }
            else {
                this.goToBookingSummary();
            }
        }
    };
    HomePage.prototype.goToBookingSummary = function () {
        var strStartTime = this.bookingObj.startTime;
        var pickdt = strStartTime.replace("T", ' ');
        pickdt = pickdt.replace("Z", '');
        var strEndTime = this.bookingObj.endTime;
        var dropdt = strEndTime.replace("T", ' ');
        dropdt = dropdt.replace("Z", '');
        var minuteDIff = this.diff_minutes(this.bookingObj.startTime, this.bookingObj.endTime);
        var clientId = this.shareService.getClientId();
        this.bookingObj["clientId"] = clientId;
        this.bookingObj["endTime"] = dropdt;
        this.bookingObj["startTime"] = pickdt;
        this.bookingObj["minuteDiff"] = minuteDIff;
        this.bookingObj["latitude"] = this.latitude;
        this.bookingObj["longitude"] = this.longitude;
        this.shareService.setBookingDetail(this.bookingObj);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__booking_summary_booking_summary__["a" /* BookingSummaryPage */]);
    };
    HomePage.prototype.diff_minutes = function (t2, t1) {
        var dt2 = new Date(t2);
        var dt1 = new Date(t1);
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));
    };
    HomePage.prototype.next = function () {
        //alert(this.bookingObj.tripType);
        console.log(this.bookingObj.pickLocation);
        console.log(this.bookingObj.dropLocation);
        if (this.bookingObj.pickLocation == "") {
            this.presentToast("Please select pick location (From) .");
        }
        else if (this.bookingObj.dropLocation == "") {
            this.presentToast("Please select drop location (To).");
        }
        else if (this.bookingObj.tripType == "") {
            this.presentToast("Please select Trip Type.");
        }
        else {
            this.step_1 = false;
            this.step_2 = true;
        }
    };
    HomePage.prototype.next1 = function () {
        // alert(this.bookingObj.carType);
        if (this.bookingObj.carType != "") {
            this.step_1 = false;
            this.step_2 = false;
            this.step_3 = true;
        }
        else {
            this.presentToast("Please select car Type.");
        }
    };
    HomePage.prototype.next2 = function () {
        // alert(this.bookingObj.gearType);
        if (this.bookingObj.gearType != '') {
            this.step_1 = false;
            this.step_2 = false;
            this.step_3 = false;
            this.step_4 = true;
        }
        else {
            this.presentToast("Please select Gear Type.");
        }
    };
    HomePage.prototype.back = function () {
        this.step_1 = true;
        this.step_2 = false;
    };
    HomePage.prototype.back1 = function () {
        this.step_1 = false;
        this.step_2 = true;
        this.step_3 = false;
    };
    HomePage.prototype.back2 = function () {
        this.step_1 = false;
        this.step_2 = false;
        this.step_3 = true;
        this.step_4 = false;
    };
    HomePage.prototype.checkVersion = function () {
        var _this = this;
        this.postService.getVersion().then(function (result) {
            console.log(result);
            var serverVersion = parseInt(result["data"]);
            var appVersion = parseInt(_this.shareService.getVersion());
            if (appVersion < serverVersion) {
                ///alert("need to update");
                _this.updateConfirm();
            }
            else {
                //setTimeout(function(){
                _this.obj.checkReting();
                // }, 3000);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.checkReting = function () {
        var _this = this;
        var id = this.shareService.getClientId();
        this.postService.checkReting(id).then(function (result) {
            console.log(result);
            var retingObj = result[0];
            if (retingObj != undefined) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__reting_reting__["a" /* RetingPage */], { "data": retingObj });
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.updateConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Update !',
            message: 'New update available. Do you want to update ?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // setTimeout(function(){
                        _this.obj.checkReting();
                        //  }, 3000);
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.market.open('com.singhal.driverOnApp');
                        _this.obj.checkReting();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("search"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "searchElementRef", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Book Driver</ion-title>\n  </ion-navbar>\n</ion-header>\n\n \n  <ion-content class="bookDriverInput">\n    <ion-item>\n        <ion-label fixed>From</ion-label>\n        <ion-input id="txtHome" [(ngModel)]="bookingObj.pickLocation" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>To</ion-label>\n      <ion-input id="textDes" [(ngModel)]="bookingObj.dropLocation" type="text"></ion-input>\n  </ion-item>\n \n\n  <!-- <div id="map-canvas"></div> -->\n\n  <agm-map  [latitude]="latitude" [longitude]="longitude" (mapReady)="mapReady($event)" [scrollwheel]="true" [zoom]="zoom">\n    <!-- <agm-marker [latitude]="latitude" [longitude]="longitude" [markerDraggable] ="true" (dragEnd)="markerMoved($event)" ></agm-marker> -->\n  </agm-map> \n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="setCurrentPosition()"><ion-icon name="locate"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n \n\n<ion-footer id="travelForm"> \n  <div *ngIf="step_1" id="travelStep_1">\n    \n      <ion-list radio-group class="myRadio" [(ngModel)]="bookingObj.tripType">\n        \n        <ion-item class="localTrip radioWithImg">\n          <ion-radio value="local" checked></ion-radio>\n          <ion-label>Local</ion-label>\n          \n        </ion-item>\n      \n        <ion-item class="roundTrip radioWithImg">\n          <ion-radio value="outstation"></ion-radio>\n          <ion-label>Outstation</ion-label>\n          \n        </ion-item>\n\n        <ion-item class="oneWayTrip radioWithImg">\n          <ion-radio value="oneway"></ion-radio>\n          <ion-label>One Way Trip</ion-label>\n          \n        </ion-item>       \n      </ion-list>\n\n      <ion-grid>\n          <ion-row>\n            <ion-col col-12>\n      <button color="light" ion-button block icon-end  (click)="next()"> Next <ion-icon name="arrow-forward"></ion-icon></button>\n      </ion-col></ion-row></ion-grid>\n</div>\n<div *ngIf="step_2" id="travelStep_2">\n\n    <ion-list radio-group class="myRadio" [(ngModel)]="bookingObj.carType">\n        <ion-item class="smlCar radioWithImg">\n          <ion-radio checked="true" value="small"></ion-radio>\n          <ion-label>Small</ion-label>\n        </ion-item>\n        <ion-item class="midCar radioWithImg">\n          <ion-radio value="medium"></ion-radio>\n          <ion-label>Medium</ion-label>\n        </ion-item>\n        <ion-item class="lrgCar radioWithImg">\n          <ion-radio value="large"></ion-radio>\n          <ion-label>Large</ion-label>\n        </ion-item>\n        <ion-item class="lxyCar radioWithImg">\n            <ion-radio value="luxury"></ion-radio>\n            <ion-label>Luxury</ion-label>\n          </ion-item>\n      </ion-list>\n        <ion-grid>\n            <ion-row>\n                <ion-col col-6><button color="danger" ion-button block icon-start (click)="back()"><ion-icon name="arrow-back"></ion-icon> Back</button></ion-col>\n                <ion-col col-6><button color="light" ion-button block icon-end (click)="next1()">Next <ion-icon name="arrow-forward"></ion-icon></button></ion-col>\n            </ion-row>\n         </ion-grid>\n      </div>\n      <div  *ngIf="step_3" id="travelStep_3">\n          <ion-list radio-group class="myRadio" [(ngModel)]="bookingObj.gearType">\n              <ion-item>\n                <ion-radio checked="true" value="manual"></ion-radio>\n                <ion-label>Manual</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-radio value="auto"></ion-radio>\n                <ion-label>Automatic</ion-label>\n              </ion-item>\n            </ion-list>\n          <ion-grid>\n              <ion-row>\n                <ion-col col-6><button color="danger" ion-button block icon-start (click)="back1()"><ion-icon name="arrow-back"></ion-icon> Back</button></ion-col>\n                <ion-col col-6><button color="light" ion-button block icon-end (click)="next2()">Next <ion-icon name="arrow-forward"></ion-icon></button></ion-col>\n              </ion-row>\n           </ion-grid>\n        </div>\n        <div *ngIf="step_4" id="travelStep_4">\n          \n  \n    <ion-grid>\n  <ion-row>\n    <ion-col col-6>\n        <ion-item>\n            <ion-label>Start Date</ion-label>\n            <ion-datetime displayFormat="MMM DD, YY HH:mm" min={{minDate}} max="{{maxDate}}" pickerFormat="DD-MMM-YYYYThh:mmA" [(ngModel)]="bookingObj.startTime"></ion-datetime>\n          </ion-item>\n\n    </ion-col>\n  \n    <ion-col col-6>\n        <ion-item>\n            <ion-label>End Date</ion-label>\n            <ion-datetime displayFormat="MMM DD, YY HH:mm" min={{minDate}} max="{{maxDate}}"  pickerFormat="DD-MMM-YYYYThh:mmA" [(ngModel)]="bookingObj.endTime"></ion-datetime>\n          </ion-item>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid>\n    <ion-row>\n      <ion-col col-6><button color="danger" ion-button block icon-start (click)="back2()"> <ion-icon name="arrow-back"></ion-icon> Back</button></ion-col>\n      <ion-col col-6><button color="light" ion-button block icon-end (click)="bookingSummary()"> Next <ion-icon name="arrow-forward"></ion-icon></button></ion-col>\n    </ion-row>\n </ion-grid>\n</div>\n</ion-footer>'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__app_service_share_service__["a" /* ShareService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_9__app_service_postService_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_market__["a" /* Market */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(530);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_current_booking_current_booking__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_booking_history_booking_history__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_driver_charges_driver_charges__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_help_support_help_support__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_booking_summary_booking_summary__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_trip_details_trip_details__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_diagnostic__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_location_accuracy__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_share_share__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_rating__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_call_number__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic_native__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_transfer__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_image_picker__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_transfer__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_path__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_market__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_reting_reting__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_launch_navigator__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_driver_location_driver_location__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_otp_otp__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_current_booking_current_booking__["a" /* CurrentBookingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_booking_history_booking_history__["a" /* BookingHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_driver_charges_driver_charges__["a" /* DriverChargesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_help_support_help_support__["a" /* HelpSupportPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_booking_summary_booking_summary__["a" /* BookingSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trip_details_trip_details__["a" /* TripDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_reting_reting__["a" /* RetingPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_driver_location_driver_location__["a" /* DriverLocationPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_otp_otp__["a" /* OtpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/additional-charge/additional-charge.module#AdditionalChargePageModule', name: 'AdditionalChargePage', segment: 'additional-charge', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyCU3MooMxfcSusLCB_loPk8Wh6nV0imWZA",
                    libraries: ["places"]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_current_booking_current_booking__["a" /* CurrentBookingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_booking_history_booking_history__["a" /* BookingHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_driver_charges_driver_charges__["a" /* DriverChargesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_help_support_help_support__["a" /* HelpSupportPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_booking_summary_booking_summary__["a" /* BookingSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trip_details_trip_details__["a" /* TripDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_reting_reting__["a" /* RetingPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_driver_location_driver_location__["a" /* DriverLocationPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_otp_otp__["a" /* OtpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__app_service_postService_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_20__app_service_share_service__["a" /* ShareService */],
                __WEBPACK_IMPORTED_MODULE_28_ionic_native__["a" /* SocialSharing */],
                //Storage,
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_market__["a" /* Market */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_launch_navigator__["a" /* LaunchNavigator */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_current_booking_current_booking__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_booking_history_booking_history__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_driver_charges_driver_charges__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_help_support_help_support__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_share_share__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = /** @class */ (function () {
    function MyApp(alertCtrl, platform, statusBar, splashScreen, storage, share, diagnostic, toastCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.share = share;
        this.diagnostic = diagnostic;
        this.toastCtrl = toastCtrl;
        //rootPage: any = WelcomePage;
        this.isExistShow = true;
        this.initializeApp();
        this.userName = "";
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Profile', icon: 'contact', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Book Drive', icon: 'car', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Current Booking', icon: 'attach', component: __WEBPACK_IMPORTED_MODULE_7__pages_current_booking_current_booking__["a" /* CurrentBookingPage */] },
            { title: 'Booking History', icon: 'filing', component: __WEBPACK_IMPORTED_MODULE_8__pages_booking_history_booking_history__["a" /* BookingHistoryPage */] },
            { title: 'Driver Charges', icon: 'cash', component: __WEBPACK_IMPORTED_MODULE_9__pages_driver_charges_driver_charges__["a" /* DriverChargesPage */] },
            { title: 'Help and Support', icon: 'help', component: __WEBPACK_IMPORTED_MODULE_10__pages_help_support_help_support__["a" /* HelpSupportPage */] },
            { title: 'Share', icon: 'share', component: __WEBPACK_IMPORTED_MODULE_11__pages_share_share__["a" /* SharePage */] },
        ];
        this.storage.get('ClientloginId').then(function (loginId) {
            console.log('ClientloginId: ' + loginId);
            if (loginId) {
                _this.share.setClientId(loginId);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */]);
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.diagnostic.isLocationEnabled()
                .then(function (state) {
                if (state) {
                    console.log("location on");
                }
                else {
                    _this.diagnostic.switchToLocationSettings();
                }
            }).catch(function (e) { return console.error(e); });
            _this.splashScreen.hide();
        });
        //back button code
        this.platform.registerBackButtonAction(function (event) {
            //console.log(this.nav.getActive().name);
            if (_this.share.isHomePage()) {
                // this.platform.exitApp();
                if (_this.isExistShow) {
                    _this.ExitConfirm();
                }
            }
            else {
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    //this.nav.setRoot(HomePage);
                    _this.storage.get('ClientloginId').then(function (loginId) {
                        console.log('ClientloginId: ' + loginId);
                        if (loginId) {
                            _this.share.setClientId(loginId);
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                        }
                        else {
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */]);
                        }
                    });
                }
            }
        }, 101);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Do you want to Logout ?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.storage.remove("ClientloginId");
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.ExitConfirm = function () {
        var _this = this;
        this.isExistShow = false;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Do you want to Exit?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        _this.isExistShow = true;
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.isExistShow = true;
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\app\app.html"*/'\n<ion-menu [content]="content" id="mainMenu">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title><img alt="DriverOnApp" src="./assets/imgs/logo-inner.png"></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    \n    <ion-list class="profileImg">\n        <ion-item>\n          <ion-avatar>\n              <img src="assets/imgs/profileImage.jpg">\n            <!-- <img src="https://placeimg.com/120/120/people"> -->\n          </ion-avatar>\n          <h2>{{userName}}</h2>\n        </ion-item>\n      </ion-list>\n      \n    <ion-list class="sliderNavigation">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" item-left></ion-icon>\n        {{p.title}}\n      </button>\n      <button color="danger" ion-item (click)="presentConfirm()">\n        <ion-icon name="log-out" item-left></ion-icon>\n        Logout\n        </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- <! Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus  -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n\n</ion-nav>\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_13__service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_postService_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_share_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menu, postService, shareService, loadingCtrl, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.postService = postService;
        this.shareService = shareService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loginData = { email: "", password: "" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.menu.swipeEnable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        //this.menu.swipeEnable(true);
    };
    LoginPage.prototype.goToReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        console.log(this.loginData);
        this.loginData["dataMode"] = "login";
        this.showLoader();
        //this.regData ={"dataMode":"register","username":"jaipur","password":"pinkcity","email":"jaipur@gmail.com"};
        this.postService.login(this.loginData).then(function (result) {
            console.log(result);
            _this.loading.dismiss();
            _this.resData = result;
            if (_this.resData.success) {
                _this.storage.set("ClientloginId", _this.resData.id);
                _this.shareService.setClientId(_this.resData.id);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.presentToast(_this.resData.message);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><img alt="DriverOnApp" src="./assets/imgs/logo-inner.png"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background">\n    <ion-card>\n      <ion-card-header>\n        User Login\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list no-line>\n          <ion-item>\n            <ion-input type="text" placeholder="Email Id"  [(ngModel)]="loginData.email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="Password"  [(ngModel)]="loginData.password"></ion-input>\n          </ion-item>\n          <a>Forgot your login detail? <b>Get help signing in</b></a>\n          <button ion-button block outline color="light" (click)="doLogin()">Log in</button>\n          \n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <button class="bottom" ion-button clear full color="light" (click)="goToReg()">Don\'t have an account? Sign up</button>\n  </ion-content>\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_service_postService_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_postService_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_share_service__["a" /* ShareService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[525]);
//# sourceMappingURL=main.js.map