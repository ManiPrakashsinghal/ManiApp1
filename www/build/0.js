webpackJsonp([0],{

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalChargePageModule", function() { return AdditionalChargePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__additional_charge__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdditionalChargePageModule = /** @class */ (function () {
    function AdditionalChargePageModule() {
    }
    AdditionalChargePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__additional_charge__["a" /* AdditionalChargePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__additional_charge__["a" /* AdditionalChargePage */]),
            ],
        })
    ], AdditionalChargePageModule);
    return AdditionalChargePageModule;
}());

//# sourceMappingURL=additional-charge.module.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalChargePage; });
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
 * Generated class for the AdditionalChargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdditionalChargePage = /** @class */ (function () {
    function AdditionalChargePage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
        this.oneWay = false;
        this.outStanding = false;
        this.local = false;
        console.log(navParams.get('tripType'));
        var tripTypeAdd = navParams.get('tripType');
        if (tripTypeAdd == "local") {
            this.local = true;
        }
        else if (tripTypeAdd == "oneway") {
            this.oneWay = true;
        }
        else if (tripTypeAdd == "outstation") {
            this.outStanding = true;
        }
    }
    AdditionalChargePage.prototype.closeThisModel = function () {
        this.view.dismiss();
    };
    AdditionalChargePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdditionalChargePage');
    };
    AdditionalChargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-additional-charge',template:/*ion-inline-start:"D:\Mani_Work\DriverOnApp\src\pages\additional-charge\additional-charge.html"*/'<!--\n\n  Generated template for the AdditionalChargePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Additional Charge</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- LOCAL BOOKINGS START-->\n\n  <ion-card *ngIf="local">\n\n    <ion-card-content>\n\n    <h2>FOLLOWING ARE AS PER MARKET STANDARDS  </h2>\n\n      <ul class="my-modal-list">\n\n        <li> DRIVER CONVEYANCE CHARGES OF RS. 50 IS APPLICABLE FOR LOCAL BOOKINGS.</li>\n\n        <li> NIGHT TRAVELLING ALLOWANCE OF RS. 100 IS APPLICABLE FOR LOCAL BOOKING STARTING/ ENDING BETWEEN 12AM. TO 4AM.</li>\n\n      </ul>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!-- LOCAL BOOKINGS END -->\n\n    <!-- OUT STANDING START-->\n\n  <ion-card *ngIf="outStanding">\n\n    <ion-card-content>\n\n    <h2>FOLLOWING ARE AS PER MARKET STANDARDS</h2>\n\n      <ul class="my-modal-list">\n\n        <li> DRIVER CONVEYANCE CHARGES OF RS. 50 IS APPLICABLE FOR OUTSTATION TRIP BOOKING.</li>\n\n        <li> FOOD AND ACCOMMODATION WILL BE PROVIDED BY CUSTOMER.</li>\n\n      </ul>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!-- OUT STANDING END -->\n\n    <!-- OUT STANDING ONEWAY START-->\n\n  <ion-card *ngIf="oneWay">\n\n    <ion-card-content>\n\n    <h2>FOLLOWING ARE AS PER MARKET STANDARDS</h2>\n\n      <ul class="my-modal-list">\n\n        <li> IN CASE OF OUTSTATION ONE WAY TRIP CHARGES WOULD GET DOUBLED ABOVE MENTIONED TABLE BECAUSE DRIVER WILL TAKE SAME OR MAY BE MORE TIME TO REACH SOURCE LOCATION.</li>\n\n        <li> DRIVER CONVEYANCE CHARGES OF RS. 100 IS APPLICABLE FOR OUTSTATION ONE WAY BOOKING.</li>\n\n        <li> NIGHT TRAVELLING ALLOWANCE OF RS. 100 IS APPLICABLE FOR OUTSTATION ONE WAY BOOKING STARTING/ ENDING BETWEEN 10PM TO 4AM.</li>\n\n        <li> FOOD AND ACCOMMODATION WILL BE PROVIDED BY CUSTOMER.</li>\n\n        <li> RETURN BUS FARE WILL BE BORNE BY THE USER IN CASE OF ONE WAY TRIP. </li>\n\n      </ul>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!-- OUT STANDING ONEWAY END -->\n\n  \n\n</ion-content>\n\n<ion-footer>\n\n  <button color="danger" ion-button block icon-start (click)="closeThisModel()">OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Mani_Work\DriverOnApp\src\pages\additional-charge\additional-charge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], AdditionalChargePage);
    return AdditionalChargePage;
}());

//# sourceMappingURL=additional-charge.js.map

/***/ })

});
//# sourceMappingURL=0.js.map