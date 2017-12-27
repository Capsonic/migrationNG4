import { Injectable } from '@angular/core';
import { CRUDFactory } from '../services/CRUDFactory';
import { Http } from '@angular/http';

@Injectable()
export class FirstServiceProvider extends CRUDFactory {

  constructor(http: Http) {
    super({
      endPoint: 'First',
      adapterIn: 1,
      adapterOut: 1
    }, null);
    this.http = http;
  }

}
