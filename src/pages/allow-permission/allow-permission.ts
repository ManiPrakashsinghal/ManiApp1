import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Storage } from '@ionic/storage';
import { ShareService } from '../../app/service/share.service'
import { WelcomePage } from '../welcome/welcome';
import { HomePage } from '../home/home';

/**
 * Generated class for the AllowPermissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allow-permission',
  templateUrl: 'allow-permission.html',
})
export class AllowPermissionPage {

  constructor(public nav: NavController, public navParams: NavParams,public storage:Storage,public share:ShareService,
  private diagnostic: Diagnostic) {
	  
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllowPermissionPage');
	
  }
  
  
  next(){
	 
			var thisObj = this;
			this.diagnostic.requestRuntimePermission(this.diagnostic.permission.CALL_PHONE).then((status) => {
				 switch(status){
					case thisObj.diagnostic.permissionStatus.GRANTED:
						console.log("Permission granted to use the camera");
						
						thisObj.storage.get('ClientloginId').then(loginId=>{
							console.log('ClientloginId: '+ loginId);
							if(loginId){
							thisObj.share.setClientId(loginId);
							thisObj.nav.setRoot(HomePage);
							}else{
							  thisObj.nav.setRoot(WelcomePage);
							}
						  });											
						break;
					case thisObj.diagnostic.permissionStatus.NOT_REQUESTED:
						console.log("Permission to use the camera has not been requested yet");
						thisObj.nav.setRoot(AllowPermissionPage);
						break;
					case thisObj.diagnostic.permissionStatus.DENIED:
						console.log("Permission denied to use the camera - ask again?");
						thisObj.nav.setRoot(AllowPermissionPage);
						break;
					case thisObj.diagnostic.permissionStatus.DENIED_ALWAYS:
						console.log("Permission permanently denied to use the camera - guess we won't be using it then!");
						thisObj.nav.setRoot(AllowPermissionPage);
						break;
				}
	    });
			
			
  }
  

}
