import { Component, ViewChild } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { LoginComponent } from '../components/login/login';
import { UsersComponent } from '../components/users/users';
import { UsersPage } from '../pages/users/users';

@Component({
  templateUrl: 'app.html',
  providers: [
    HttpModule
  ]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modal: ModalController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Users', component: UsersPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    let profileModal = this.modal.create(LoginComponent, null, { enableBackdropDismiss:true});
    profileModal.dismiss(false);
    profileModal.present();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openUserList(){
    this.nav.push(UsersPage);

  }
}
