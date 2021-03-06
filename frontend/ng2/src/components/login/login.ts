import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['/src/components/login/login.scss']
})

export class LoginComponent {
  errorMessage: string;
  
  constructor(public nav: NavController, private loginService: LoginService) {
  }

  login(formValues) {
    if (!formValues.userName || !formValues.password) {
      this.errorMessage = 'Username or Password fields are missing';
    } else{ 
      const data = 'grant_type=password&userName=' + formValues.userName + '&password=' + formValues.password;
      // const data = 'grant_type=password&userName=erickhp12&password=webstar12';
      
      this.loginService.getToken(data).subscribe(results => {
        localStorage.setItem('access_token', results.access_token);
        localStorage.setItem('userName', formValues.userName);
        this.nav.pop();
        });
      }
    }

}
