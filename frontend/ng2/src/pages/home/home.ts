import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public nav: NavController
  ) { }
 
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Administrator',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Profile',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('profile clicked')
          }
        },
        {
          text: 'Logout',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            localStorage.clear();
            this.nav.popToRoot();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
