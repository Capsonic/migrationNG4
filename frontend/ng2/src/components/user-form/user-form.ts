import { Component } from '@angular/core';
import { UserServiceProvider } from '../../providers/user-service';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.html'
})

export class UserFormComponent {
  text: string;
  user: string;
  baseEntity: any;

  constructor(public userSerivceProvider: UserServiceProvider) {
  }

  submitForm(userForm) {
    console.log('entro a submit form');
    console.log(userForm);

    this.userSerivceProvider.createEntity(userForm)
      .subscribe(results => {
        console.log('response: | ' + results);
      }, error => console.log(error));
  }

  createInstance() {
    this.userSerivceProvider.createInstance()
      .subscribe(results => {
        console.log('response: | ' + results);
        this.baseEntity = results;
      }, error => console.log(error)
      );
  }
}
