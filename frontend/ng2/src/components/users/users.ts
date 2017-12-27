import { Component } from '@angular/core';
import { UserServiceProvider } from '../../providers/user-service';
import { ModalController } from 'ionic-angular';
import { UserFormComponent } from '../user-form/user-form';

@Component({
  selector: 'users-component',
  templateUrl: 'users.html'
})
export class UsersComponent {
  users: string[];
  text: string;

  constructor(private userServiceProvider: UserServiceProvider, private modal: ModalController) {
    this.userServiceProvider.loadEntities().subscribe(results => {
      this.users = results.Result;
    });
  }

  addUser(){
    let profileModal = this.modal.create(UserFormComponent, {oEntityOrId: null});
    profileModal.dismiss(false);
    profileModal.present();
  }

  deleteUser(user){
    this.userServiceProvider.removeSelected(user, user.UserKey).subscribe(results => {
      // this.users = results.Result;
      console.log('Eliminado correctamente');
    });
  }

  openUser(user) {
    let profileModal = this.modal.create(UserFormComponent, {oEntityOrId: user.id});
    profileModal.dismiss(false);
    profileModal.present();
  }
}
