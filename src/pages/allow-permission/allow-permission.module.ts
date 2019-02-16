import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllowPermissionPage } from './allow-permission';

@NgModule({
  declarations: [
    AllowPermissionPage,
  ],
  imports: [
    IonicPageModule.forChild(AllowPermissionPage),
  ],
})
export class AllowPermissionPageModule {}
