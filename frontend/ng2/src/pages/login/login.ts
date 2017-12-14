import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['/src/pages/login/login.scss']
})

export class LoginPage {
    

    constructor(public nav: NavController) {
    }

  
  itemTapped(){
    this.nav.push(HomePage);
  }
}
