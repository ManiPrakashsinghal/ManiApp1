import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://driveronapp.com/Admin/api/';
//let apiUrl = 'http://127.0.0.1/demo/Admin/api/';
//http://127.0.0.1/DriverOnApp/Admin/api/UserApp/index.php

@Injectable()
export class PostService{
	

	constructor(private http:Http){

	}

	register(data) {
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Content-Type', 'application/x-www-form-urlencoded');
	
			this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(data), {headers: headers})
			  .subscribe(res => {
				resolve(res.json());
			  }, (err) => {
				reject(err);
			  });
		});
		}

		sendOtp(mobileNo,otp) {
			return new Promise((resolve, reject) => {
				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded');
				let apiData = {"dataMode":"sendOtpToNumber","mobileNo":mobileNo,"otp":otp};
				this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
				  .subscribe(res => {
					resolve(res.json());
				  }, (err) => {
					reject(err);
				  });
			});
		}
		

		login(data) {
			return new Promise((resolve, reject) => {
				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded');
		
				this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(data), {headers: headers})
					.subscribe(res => {
					resolve(res.json());
					}, (err) => {
					reject(err);
					});
			});
			}

			getSummaryDetail(data) {
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"getBookingDetail","bookingData":data};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});

			}	


			boookNow(data) {
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"bookNow","bookingData":data};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});

			}	

			getClientProfile(id){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"getClientProfile","id":id};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}
			updateProfile(obj){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"updateProfile","data":obj};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}

			changePassword(obj){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"changePassword","data":obj};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}


			getBookingHistory(id){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"getBookingHistory","id":id};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}

			getCurrentBooking(id){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"getCurrentBooking","id":id};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}

			getDriverLocation(id){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"getDriverLocationDetail","id":id};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}
			
			cancelBooking(id){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"cancelBooking","id":id};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}

			getDriverDetail(id){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"getDriverDetail","id":id};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}

			updateReting(retingVal,bookingId,review){
				return new Promise((resolve, reject) => {
				  let headers = new Headers();
				  let apiData = {"dataMode":"updateReting","RetVal":retingVal,"bookingId":bookingId,"review":review};
				  headers.append('Content-Type', 'application/x-www-form-urlencoded');
				  this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
					.subscribe(res => {
					resolve(res.json());
					}, (err) => {
					reject(err);
					});
				});
			  }

			  getVersion(){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"getVersion"};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}

			checkReting(id){
				return new Promise((resolve, reject) => {
					let headers = new Headers();
					headers.append('Content-Type', 'application/x-www-form-urlencoded');
					let apiData = {"dataMode":"getBookingForDriverRating","id":id};
					this.http.post(apiUrl+'UserApp/index.php', JSON.stringify(apiData), {headers: headers})
						.subscribe(res => {
						resolve(res.json());
						}, (err) => {
						reject(err);
						});
				});
			}


	getData():void{
		this.http.post
	}
	
	
}