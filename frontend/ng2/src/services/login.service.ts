import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Config } from '../app/config';

@Injectable()
export class LoginService {
    url = Config.API_URL;

    constructor(private http: Http) {
    }

    getToken(body): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
        const result = this.http.post(this.url + 'token', body, options)
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
