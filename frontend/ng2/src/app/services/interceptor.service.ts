import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Config } from '../config';


@Injectable()
export class InterceptorService {
    url = Config.API_URL;
    body: string;
    token: string;

    constructor(private http: Http) {
         
    }
    
    pingTest(): Observable<any> {
        this.body='';
        this.token = localStorage.getItem('access_token');
        console.log('---------------------- ping.service: ' + this.url + ' BODY=> ' + this.token);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
        console.log('1');
        const result = this.http.get(this.url + 'ping/pingError',)
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    }
 
    private extractData(res: Response) {
        const body = res.json();
        console.log(body);
        return body;
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
