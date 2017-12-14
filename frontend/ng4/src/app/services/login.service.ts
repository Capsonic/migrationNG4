import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class LoginService {
    url = 'http://localhost:57063/api/';

    constructor(private http: Http) {

    }

    getToken(data): Observable<any> {
        console.log('----------inicia servicio getToken');
        const body = JSON.stringify(data);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, body, options)
        .map(this.extractData)
        .catch(this.handleError);
}

    private extractData(res: Response) {
        const body = res.json();
        return body;
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
