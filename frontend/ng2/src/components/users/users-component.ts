import { Component, OnInit } from '@angular/core';
import { UserServiceProvider } from '../../providers/user-service';
import { ModalController, AlertController } from 'ionic-angular';
import { UserFormComponent } from '../user-form/user-form';
import { ListController } from '../../services/ListController';

@Component({
  selector: 'users-component',
  templateUrl: 'users-component.html'
})

export class UsersComponent extends ListController implements OnInit {

  constructor(public userSerivceProvider: UserServiceProvider, private modal: ModalController, private alert: AlertController) {
    super({ service: userSerivceProvider });
  }

  ngOnInit() {
    this.load();
 }

 delete(user){
    console.log('Entro a borrar usuario ' + user.Value);
    let confirm = this.alert.create({
      title: 'Attention',
      message: 'Are you sure you want to delete ' + user.Value +'?',
      buttons: [
        { 
          text: 'Cancel'
         },
         {
          text: 'Delete',
          handler: () => {
            console.log('SI quisiste borrar el usuario seleccionado '  + user);
            this.removeItem(user);
          }
        }
      ]
    });
    confirm.present();
  }
 
  // esto debe pasarse a listcontroller
  addUser() {
    let profileModal = this.modal.create(UserFormComponent, {oEntityOrId: null});
    profileModal.dismiss(false);
    profileModal.present();
  }
 
  // esto debe pasarse a listcontroller
  openUser(user) {
    let profileModal = this.modal.create(UserFormComponent, {oEntityOrId: user.id});
    profileModal.dismiss(false);
    profileModal.present();
  }

  afterLoad() {
  }

  onOpenItem() {
  }
  
  afterRemove() {
    this.load();
  }
  
  afterCreate() {
  }

}
