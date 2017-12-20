import { Component } from '@angular/core';
import { NavController, AlertController, Platform, ActionSheetController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { LoginComponent } from '../../components/login/login';
import { InterceptorService } from '../../app/services/interceptor.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  response: string;
  errorThrown: string;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public nav: NavController,
    public modal: ModalController,
    public interceptorService: InterceptorService,
    public alertCtrl: AlertController
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
            // this.nav.popToRoot();
            let profileModal = this.modal.create(LoginComponent, null, {showBackdrop: true,enableBackdropDismiss:false});
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

  pingTest(){
    this.interceptorService.pingTest().subscribe(results => {
            this.response = results.ResponseDescription;
            this.errorThrown =  results.ErrorThrown;
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: this.response,
              buttons: ['OK']
            });
            alert.present();
          });

      }
}
