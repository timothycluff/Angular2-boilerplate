/**
 * Created by tim.cluff on 4/6/2017.
 */

import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IPage, ISession } from './page.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PageService {

    constructor(private http: Http) {}

    getPages():Observable<IPage[]> {
        return this.http.get('/api/pages').map((response: Response) => {
            return <IPage[]>response.json();
        }).catch(this.handleError);
    }

    getPage(id:number):Observable<IPage> {
        return this.http.get('/api/pages/' + id).map((response: Response) => {
            return <IPage>response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}