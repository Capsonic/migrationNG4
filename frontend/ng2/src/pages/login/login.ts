import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginService } from '../../app/services/login.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
    acceso: string;

    constructor(public nav: NavController, private loginService: LoginService) {
    }

  login(formValues) {
    const data = 'grant_type=password&userName=' + formValues.userName + '&password=' + formValues.password;
    this.loginService.getToken(data).subscribe(results => {
      this.acceso = results.access_token;
      console.log(this.acceso);

      localStorage.setItem('access_token', this.acceso);
      localStorage.setItem('userName', formValues.userName);
      this.nav.setPages(HomePage);
    }
    );
  }
  itemTapped(){
    this.nav.push(HomePage)
  }
}
