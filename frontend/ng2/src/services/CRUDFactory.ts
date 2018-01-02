import { Observable } from 'rxjs/RX';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { IConfig } from './IConfig';
import { ICommonResponse } from './ICommonResponse';
import { Config } from '../app/config';
import { IEntity } from './IEntity';
import alertify from 'alertifyjs';


export abstract class CRUDFactory {
    baseUrl: string = Config.API_URL;
    http: Http;
    cache: any[];

    constructor(private config: IConfig) {
    }

    addAuthorization() {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let authorization = new URLSearchParams();
        let options = new RequestOptions({ headers: headers, params: authorization });

        headers.append('Authorization', 'bearer ' + localStorage.getItem('access_token'));
        return options
    }

    loadEntities(params?) {
        const result = this.http.get(this.baseUrl + this.config.endPoint, this.addAuthorization())
            .map(this.extractData)
            .catch(this.generalError);
        return result;
    }

    loadEntity(id, params?) {
        return this.http.get(this.baseUrl + this.config.endPoint + '/' + id, this.addAuthorization())
            .map(this.extractData)
            .catch(this.generalError);
    }

    createEntity(object) {
        return this.http.post(this.baseUrl + this.config.endPoint, '=' + encodeURIComponent(JSON.stringify(object)), this.addAuthorization())
            .map(this.extractData)
            .map(o => o.Result)
            .catch(this.generalError);
    }

    removeSelected(object, userId) {
        console.log('entra a crud factory removeSelected |' + this.baseUrl + this.config.endPoint + "/" + userId);
        return this.http.delete(this.baseUrl + this.config.endPoint + "/" + userId, this.addAuthorization())
            .map(this.extractData)
            .catch(this.generalError);
    }

    createInstance() {
        return this.http.post(this.baseUrl + this.config.endPoint + '/create', null, this.addAuthorization())
            .map(this.extractData)
            .map(d => d.Result)
            .catch(this.generalError);
    }

    private extractData(res: Response): ICommonResponse {
        const body: ICommonResponse = res.json();
        console.log(body);
        if (body.ErrorThrown) {
            throw body;
        }
        return body;
    }


    private generalError(error: any) {
        console.log('STATUS |' + error.status);
        if (error.ErrorThrown) {
            switch (error.ErrorType) {
                case "MESSAGE":
                    alertify.alert(error.ResponseDescription);
                    console.log(error.ResponseDescription);
            }
            return Observable.empty();
        } else {
            switch (error.status) {
                case 401:
                    console.log('Redireccionar a login');
                    return Observable.empty();
            }
        }
        return Observable.throw(error.statusText);
    }

    save(oEntity): Observable<any> {
        return this.createEntity(oEntity);
    }

    remove(): Observable<any> {
        return Observable.empty();
    }

    getById(id: number): IEntity {
        return null;
    }
}