import { Injectable } from '@angular/core';
import { CRUDFactory } from '../services/CRUDFactory';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirstServiceProvider extends CRUDFactory {

  constructor(http: HttpClient) {
    super({
      endPoint: 'First'
    });
    this.http = http;
  }

}
