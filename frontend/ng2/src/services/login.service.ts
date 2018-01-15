import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Config } from '../app/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
    url = Config.API_URL;

    constructor(private http: HttpClient) {
    }

    getToken(body): Observable<any> {

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = { headers: headers};
        return this.http.post(this.url + 'token', body, options).map(this.extractData).catch(this.handleError);


        // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // const options = new RequestOptions({ headers: headers });
        // const result = this.http.post(this.url + 'token', body, options)
        //     .map(this.extractData)
        //     .catch(this.handleError);
        // return result;
    }

    private extractData(res: Response) {
        const body = res;
        console.log(body);
        return body;
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
