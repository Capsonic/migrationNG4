import { Injectable } from '@angular/core';
import { CRUDFactory } from '../services/CRUDFactory';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SecondServiceProvider extends CRUDFactory {

  constructor(http: HttpClient) {
    super({
      endPoint: 'Second'
    });
    this.http = http;
  }

}
