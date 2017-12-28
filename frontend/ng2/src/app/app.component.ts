import { Component, ViewChild } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Nav, Platform, ActionSheetController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

//PAGES
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';

//COMPONENTS
import { LoginComponent } from '../components/login/login';

@Component({
  templateUrl: 'app.html',
  providers: [
    HttpModule
  ],
  styleUrls: ['/toastr.scss']
})
export class MyApp {
  LoggedUser: string;
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public modal: ModalController,
              public actionsheetCtrl: ActionSheetController ) {
    this.initializeApp();
    
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Users', component: UsersPage }
    ];
  }

  initializeApp() {
    if (!localStorage.getItem('access_token')) {
      console.log('si esta vacio' +  this.LoggedUser);
      let profileModal = this.modal.create(LoginComponent, null, { enableBackdropDismiss: true });
      profileModal.dismiss(false);
      profileModal.present();
    }
    this.LoggedUser = localStorage.getItem('userName');
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  openUserList() {
    this.nav.push(UsersPage);
  }
  
  openMenu(){
      let actionSheet = this.actionsheetCtrl.create({
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
            text: 'Cancel',role: 'cancel', icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => { console.log('Cancel clicked');  }
          }
        ]
      });
      actionSheet.present();
    }

  
  }

