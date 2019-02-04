import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ActionSheetController, Platform } from 'ionic-angular';
import { ShareService } from '../../app/service/share.service';
import { PostService } from '../../app/service/postService.service';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
 

declare var cordova: any;
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  loading:any;
  lastImage: string = null

 public firstName:any;
 public lastName:any;
 public email_id:any;
 public mobile_no:any;
 public address:any;
 public zip_code:any;
 public gender:any;

 old_password:any;
 password:any;
 confirm_password:any;
 profileImage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public shareService:ShareService,public postService:PostService,
    public loadingCtrl: LoadingController
    , private toastCtrl: ToastController,public platform: Platform
    ,private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController) { 
      var id = shareService.getClientId();
      this.profileImage = "http://driveronapp.com/Admin/api/UserApp/uploads/"+id+".jpg?v="+new Date().getTime();
    }


  ionViewDidLoad() {
    var id = this.shareService.getClientId();
    this.getClientProfile(id);
    console.log('ionViewDidLoad ProfilePage');
  }

getClientProfile(id){

  this.showLoader();
  
    this.postService.getClientProfile(id).then((result) => {
      console.log(result);
      this.loading.dismiss();
      var profileObj = result["data"];
      this.firstName = profileObj["name"];
      this.lastName = profileObj[""];
      this.email_id = profileObj["email_id"];
      this.mobile_no = profileObj["mobile_no"];
      this.address = profileObj["address"];
      this.zip_code = profileObj["zip_code"];
	  this.gender = profileObj["gender"];
     // this.lastImage = "http://driveronapp.com/Admin/api/UserApp/uploads/"+id+".jpg";
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
}

updateProfile(){
  var id = this.shareService.getClientId();

  var obj = {"id":id,"name":this.firstName,"email_id":this.email_id,"mobile_no":this.mobile_no,
            "address":this.address,"zip_code":this.zip_code,"gender":this.gender};

  this.showLoader();
  
    this.postService.updateProfile(obj).then((result) => {
      console.log(result);
      this.loading.dismiss();
      var status = result["status"];
      if(status == true){
        this.presentToast("successFully Save.");
        //this.getClientProfile(id);
      }else{
        this.presentToast("Error in Save. Please try again.");
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
}

updatePassword(){
  var id = this.shareService.getClientId();

  var obj = {"id":id,"newPassword":this.password};
  this.showLoader();
    this.postService.changePassword(obj).then((result) => {
      console.log(result);
      this.loading.dismiss();
      var status = result["status"];
      if(status == true){
        this.presentToast("successFully Save.");
        this.password = "";
        this.confirm_password = "";
        //this.getClientProfile(id);
      }else{
        this.presentToast("Error in Save. Please try again.");
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
}

showLoader(){
  this.loading = this.loadingCtrl.create({
      content: 'Loading...'
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


//upload profile image code 

public presentActionSheet() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Select Image Source',
    buttons: [
      {
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  });
  actionSheet.present();
}

///helper function 

public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
 
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
}

//path function 

// Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}

// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}


//upload Image to server 

public uploadImage() {
  // Destination URL
  var url = "http://driveronapp.com/Admin/api/UserApp/upload.php";
 
  // File for Upload
  var targetPath = this.pathForImage(this.lastImage);
 
  var id = this.shareService.getClientId();

  // File name only
  var filename = id+".jpg";  //this.lastImage;
 
  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename,"id":id}
  };
 
  const fileTransfer: TransferObject = this.transfer.create();
 
  this.loading = this.loadingCtrl.create({
    content: 'Uploading...',
  });
  this.loading.present();
 
  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
    this.loading.dismissAll()
    this.presentToast('Image succesful uploaded.');
  }, err => {
    this.loading.dismissAll()
    this.presentToast('Error while uploading file.');
  });
}











}
