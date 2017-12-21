import { Component } from '@angular/core';
import { Platform, ActionSheetController, ModalController, AlertController } from 'ionic-angular';

import { LoginComponent } from '../../components/login/login';
import { UserServiceProvider } from '../../providers/user-service';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  response: string;
  errorThrown: string;
  users: string[]=[];
  user: string;
  LoggedUser: string;
  pingResult: string;
  userPage: boolean = false;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public modal: ModalController,
    public alert: AlertController,
    public nav: NavController,
    public userSerivceProvider: UserServiceProvider
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
            let profileModal = this.modal.create(LoginComponent, null, { showBackdrop: true, enableBackdropDismiss: false });
            profileModal.present();
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
  
  ionViewDidLoad(){
    this.LoggedUser = 'Erick Holguin';
    // this.LoggedUser = localStorage.getItem('userName');
  }

  userList() {
    this.userSerivceProvider.loadEntities().subscribe(results => {
      this.users = results.Result;
    });
  }


  getUser(){
    this.userSerivceProvider.loadEntity(1).subscribe(results => {
      this.user = results.Result;
      // console.log('userService.loadEntity | '+ JSON.stringify(results));
    });
  }
  
}
