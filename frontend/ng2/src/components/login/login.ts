import { Component } from '@angular/core';
import { LoginService } from '../../app/services/login.service';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the LoginComponent component. 
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['/src/components/login/login.scss']
})
export class LoginComponent {
  errorMessage: string;

  constructor(public nav: NavController, private loginService: LoginService) {
  }

  login(formValues){
    this.nav.pop();
  }

  // login(formValues) {
  //   if (formValues.userName == null || formValues.password == null) {
  //     this.errorMessage = 'Username or Password fields are missing';
  //   } else{ 
  //     const data = 'grant_type=password&userName=' + formValues.userName + '&password=' + formValues.password;
      
  //     this.loginService.getToken(data).subscribe(results => {
  //       localStorage.setItem('access_token', results.access_token);
  //       localStorage.setItem('userName', formValues.userName);
  //       this.nav.pop();
  //       });
  //     }
  //   }

}
