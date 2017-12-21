import { Injectable } from '@angular/core';
import { CRUDFactory } from '../services/CRUDFactory';
import { Http } from '@angular/http';

@Injectable()
export class UserServiceProvider extends CRUDFactory {

  constructor(http: Http) {
    super({
      endPoint: 'User',
      adapterIn: 1,
      adapterOut: 1
    });
    this.http = http;
  }

}
