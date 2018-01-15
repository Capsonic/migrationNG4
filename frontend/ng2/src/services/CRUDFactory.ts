import { Observable } from 'rxjs/RX';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
=======
// import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> cf12caf38a0b366fb6f3c67ba02b3cff34ec5c25
import { IConfig } from './IConfig';
import { ICommonResponse } from './ICommonResponse';
import { Config } from '../app/config';
import { IEntity } from './IEntity';
import alertify from 'alertifyjs';

export abstract class CRUDFactory {
    baseUrl: string = Config.API_URL;
    protected http: HttpClient;
    constructor(private config: IConfig) {
    }

    addAuthorization() {
<<<<<<< HEAD
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers = headers.append('Authorization', 'bearer ' + localStorage.getItem('access_token'));

        return { headers: headers };
=======
        // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // let authorization = new URLSearchParams();
        // let options = new RequestOptions({ headers: headers, params: authorization });
        
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type','application/x-www-form-urlencoded');
        headers = headers.append('Authorization', 'bearer ' + localStorage.getItem('access_token'));
        return { headers: headers };     
>>>>>>> cf12caf38a0b366fb6f3c67ba02b3cff34ec5c25
    }

    createEntity(object) {
        return this.http.post<ICommonResponse>(this.baseUrl + this.config.endPoint, '=' + encodeURIComponent(JSON.stringify(object)), this.addAuthorization())
            .map(this.extractData)
            .map(o => o.Result)
            .catch(this.generalError);
    }

    createInstance():Observable<any> {
<<<<<<< HEAD
        return this.http.get(this.baseUrl + this.config.endPoint + '/create', this.addAuthorization())
=======
        console.log('CRUDfactory > createInstance');
        return this.http.post<ICommonResponse>(this.baseUrl + this.config.endPoint + '/create', null, this.addAuthorization())
>>>>>>> cf12caf38a0b366fb6f3c67ba02b3cff34ec5c25
            .map(this.extractData)
            .map(d => d.Result)
            .catch(this.generalError);
    }

    getById(id: number): IEntity {
        return null;
    }

    loadEntities(params?) {
        const result = this.http.get<ICommonResponse>(this.baseUrl + this.config.endPoint, this.addAuthorization())
            .map(this.extractData)
            .catch(this.generalError);
        return result;
    }

    loadEntity(id) {
<<<<<<< HEAD
        return this.http.get(this.baseUrl + this.config.endPoint + '/' + id, this.addAuthorization())
=======
        console.log('CRUDFactory > loadEntity ' + this.baseUrl + this.config.endPoint + '/' + id);
        return this.http.get<ICommonResponse>(this.baseUrl + this.config.endPoint + '/' + id, this.addAuthorization())
            // .subscribe(
            //     r => {
            //         console.log(r)
            //     },
            //     e => {
            //         console.log(e);
            //     }
            // );
>>>>>>> cf12caf38a0b366fb6f3c67ba02b3cff34ec5c25
            .map(this.extractData)
            .catch(this.generalError);
    }
    
    remove(): Observable<any> {
        return Observable.empty();
    }
    
    save(oEntity): Observable<any> {
        if (oEntity.id > 0) {
            return this.updateEntity(oEntity);
        } else {
            return this.createEntity(oEntity);
        }
    }

    removeEntity(object, userId) {
        return this.http.delete<ICommonResponse>(this.baseUrl + this.config.endPoint + "/" + userId, this.addAuthorization())
            .map(this.extractData)
            .catch(this.generalError);
    }

    updateEntity(object) {
        return this.http.put<ICommonResponse>(this.baseUrl + this.config.endPoint + '/' + object.id, '=' + encodeURIComponent(JSON.stringify(object)), this.addAuthorization())
            .map(this.extractData)  
            .map(o => o.Result)
            .catch(this.generalError);
    }

    extractData(res: ICommonResponse): ICommonResponse {
        const body: ICommonResponse = res;
        console.log(body);
        if (body.ErrorThrown) {
            throw body;
        }
        return body;
    }

    generalError(error: any) {
        if (error.ErrorThrown) {
            switch (error.ErrorType) {
                case "MESSAGE":
                    alertify.alert(error.ResponseDescription);
            }
            return Observable.empty();
        } else {
            switch (error.status) {
                case 401:
                    //TODO: Open Login Form.
                    return Observable.empty();
            }
        }
        return Observable.throw(error.statusText);
    }
}