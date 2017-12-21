import { Observable } from 'rxjs/RX';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { IConfig } from './IConfig';
import { ICommonResponse } from './ICommonResponse';
import { Config } from '../app/config';
import { IEntity } from './IEntity';

export class CRUDFactory {
    baseUrl: string = Config.API_URL;
    http: Http;
    cache: any[];

    constructor(private config: IConfig ){
    }
 
    loadEntities(params?){  
        const result = this.http.get(this.baseUrl + this.config.endPoint, this.addAuthorization())
        .map(this.extractData)
        .catch(this.generalError);
        return result;
        
    }

    loadEntity(id, params?){ 
        return this.http.get(this.baseUrl + this.config.endPoint + '/' + id, this.addAuthorization())
        .map(this.extractData)
        .catch(this.generalError);
    }

    createEntity(object){
        console.log('entra a crud factory createEntity |' + this.baseUrl  + '/create');
        return this.http.post(this.baseUrl +  this.config.endPoint,  '=' + encodeURIComponent( JSON.stringify(object)) , this.addAuthorization())
        .map(this.extractData)
        .map(o => o.Result)
        .catch(this.generalError);
    }

    removeSelected(object, userId){
        console.log('entra a crud factory removeSelected |' + this.baseUrl +  this.config.endPoint +"/"+ userId);
        return this.http.delete(this.baseUrl +  this.config.endPoint +"/"+ userId, this.addAuthorization())
        .map(this.extractData)
        .catch(this.generalError);
    }

    createInstance(){
        return this.http.post(this.baseUrl +  this.config.endPoint + '/create', null, this.addAuthorization())
        .map(this.extractData)
        .map(d => d.Result)
        .catch(this.generalError);
    }

    addAuthorization(){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let authorization = new URLSearchParams();
        let options = new RequestOptions({ headers: headers, params: authorization });

        headers.append('Authorization', 'bearer ' + localStorage.getItem('access_token'));
        return options
    }
    
    private extractData(res: Response) {
        const body:ICommonResponse = res.json();
        if (body.ErrorThrown){
            switch(body.ErrorType){
                case "MESSAGE":
                console.log('errorThrown true ' + body.ResponseDescription);
                break;
            }
            throw body;
        }
        return body;  
    }
 

    private generalError(error: Response) {
        console.log('STATUS |' + error.status);
        switch(error.status){
            case 401:
            console.log('Redireccionar a login');
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
