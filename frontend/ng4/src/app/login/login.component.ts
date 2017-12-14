import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(formValues) {
    console.log('--------- inicia login usuario: ' + formValues.user + ' contrasena: ' + formValues.password );
    this.loginService.getToken(formValues)
    .subscribe(user => user);
  }

}