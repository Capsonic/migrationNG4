import { Injectable } from '@angular/core';
import { CRUDFactory } from '../services/CRUDFactory';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserServiceProvider extends CRUDFactory {

  constructor(public http: HttpClient) {
    super({ endPoint: 'User'});   
    this.http = http;
  }
}
