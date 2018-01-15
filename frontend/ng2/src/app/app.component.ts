import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ActionSheetController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

//PAGES
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users-page';

//COMPONENTS
import { LoginComponent } from '../components/login/login';

@Component({
  templateUrl: 'app.html',
})

export class MyApp {

  LoggedUser: string;
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor( public platform: Platform, public modal: ModalController, public actionsheet: ActionSheetController) {

    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Users', component: UsersPage }
    ];
  }

  initializeApp() {
    if (!localStorage.getItem('access_token')) {
      let profileModal = this.modal.create(LoginComponent, null, { enableBackdropDismiss: true });
      profileModal.dismiss(false);
      profileModal.present();
      this.LoggedUser = localStorage.getItem('userName');
    }
    this.LoggedUser = localStorage.getItem('userName');
  }

  openPage(page) {
    console.log('PAGE ' + page.component);
    // this.nav.setRoot(page.component);
  }

  openHome(){
    this.nav.popToRoot();
  }

  openUserList() {
    this.nav.push(UsersPage);
  }

  openMenu() {
    let as = this.actionsheet.create({
      title: 'Administrator',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Profile', icon: !this.platform.is('ios') ? 'share' : null, handler: () => {
            console.log('profile clicked')
          }
        },
        {
          text: 'Logout', icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            localStorage.clear();
            let profileModal = this.modal.create(LoginComponent, null, { showBackdrop: true, enableBackdropDismiss: false });
            profileModal.present();
          }
        },
        {
          text: 'Cancel', role: 'cancel', icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => { console.log('Cancel clicked'); }
        }
      ]
    });
    as.present();
  }


}

