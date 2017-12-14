import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ApiService {
    private apiUrl: string = 'http://adeljrz.com';

    constructor(private http: Http) {

    }

    getPatients() {
            return new Promise(resolve => {
                this.http.get(`${this.apiUrl}/requestPatients`)
                    .subscribe(res => resolve(res.json()));
                })
            }
        

    getSinglePatient(id) {
        return new Promise(resolve => {
            this.http.get(`${this.apiUrl}/requestSinglePatient/${id}`)
                .subscribe(res => resolve(res.json()));
        })
    }
}