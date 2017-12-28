import { Injectable } from '@angular/core';
import { CRUDFactory } from '../services/CRUDFactory';
import { Http } from '@angular/http';

@Injectable()
export class SecondServiceProvider extends CRUDFactory {

  constructor(http: Http) {
    super({
      endPoint: 'Second',
      adapterIn: 1,
      adapterOut: 1
    });
    this.http = http;
  }

}
