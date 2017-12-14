import { Component } from '@angular/core';
import { LoginService } from '../../app/services/login.service';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the SigninComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'signin',
  templateUrl: 'signin.html',
  styleUrls: ['/src/components/signin/signin.scss']
})
export class SigninComponent {

  acceso: string;

  constructor(public nav: NavController, private loginService: LoginService) {
    console.log('Hello SigninComponent Component');
  }

  login(formValues) {
    const data = 'grant_type=password&userName=' + formValues.userName + '&password=' + formValues.password;
    this.loginService.getToken(data).subscribe(results => {
      this.acceso = results.access_token;
      console.log(this.acceso);

      localStorage.setItem('access_token', this.acceso);
      localStorage.setItem('userName', formValues.userName);
      // this.nav.push(HomePage);
    }
    );
  }

}
