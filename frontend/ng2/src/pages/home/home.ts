import { Component } from '@angular/core';
import { Platform, ActionSheetController, ModalController, AlertController } from 'ionic-angular';
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

  userList() {
    console.log('SI SE USA USERLIST');
    this.userSerivceProvider.loadEntities().subscribe(results => {
      this.users = results.Result;
    });
  }

  getUser(){
    console.log('SI SE USA GETUSER');
    this.userSerivceProvider.loadEntity(1).subscribe(results => {
      this.user = results.Result;
      // console.log('userService.loadEntity | '+ JSON.stringify(results));
    });
  }
  
}
