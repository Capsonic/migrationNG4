import { Component, OnInit } from '@angular/core';
import { UserServiceProvider } from '../../providers/user-service';
import { FormController } from '../../services/FormController';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.html'
})

export class UserFormComponent extends FormController implements OnInit {
  text: string;
  user: string;

  constructor(public userSerivceProvider: UserServiceProvider, private params: NavParams) {
    super({
      service: userSerivceProvider
    });
  }

  ngOnInit() {
     this.load(this.params.get('oEntityOrId'));
  }



  // submitForm(userForm) {
  //   console.log('entro a submit form');
  //   console.log(userForm);

  //   this.userSerivceProvider.createEntity(userForm)
  //     .subscribe(results => {
  //       console.log('response: | ' + results);
  //     }, error => console.log(error));
  // }

  // createInstance() {
  //   this.userSerivceProvider.createInstance()
  //     .subscribe(results => {
  //       console.log('response: | ' + results);
  //       this.baseEntity = results;
  //     }, error => console.log(error)
  //     );
  // }


  afterCreate() {

  }

  afterLoad() {

  }

  afterRemove() {

  }
}
