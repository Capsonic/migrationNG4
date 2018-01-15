import { Injectable } from '@angular/core';
import { CRUDFactory } from '../services/CRUDFactory';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http'; 
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> cf12caf38a0b366fb6f3c67ba02b3cff34ec5c25

@Injectable()
export class UserServiceProvider extends CRUDFactory {

<<<<<<< HEAD
  constructor(public http: HttpClient) {
    super({ endPoint: 'User'});
=======
  constructor(http: HttpClient) {
    super({
      endPoint: 'User'
    });    
    this.http = http;
>>>>>>> cf12caf38a0b366fb6f3c67ba02b3cff34ec5c25
  }

}
