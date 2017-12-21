import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Config } from '../app/config';


@Injectable()
export class InterceptorService {
    url = Config.API_URL;
    body: string;
    token: string;

    constructor(private http: Http) {
    } 

    commonResponse(methodUrl): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let authorization = new URLSearchParams();
        let options = new RequestOptions({ headers: headers, params: authorization });

        headers.append('Authorization', 'bearer ' + localStorage.getItem('access_token'));

        const result = this.http.get(this.url += methodUrl, options)
        .map(this.extractData)
        .catch(this.handleError);
        this.url = Config.API_URL;
        return result;
    }


    private extractData(res: Response) {
        const body = res.json();
        return body;
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
