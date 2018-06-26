import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../model/common.model';

import { environment } from '../../environments/environment';

import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  URL_POSTS: string = environment.URL_POSTS;

  constructor(private http: HttpClient) { }

  getPosts (): Observable<Post[]> {

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      withCredentials: true
    };

    return this.http.get<Post[]>(this.URL_POSTS, httpOptions).pipe(
      tap((response: Post[]) => console.log(`Got Posts`)),
      catchError(this.handleError('getPosts'))
    );
  }

  private handleError(operation: String) {
    return (err: any) => {
        let errMsg = `error in ${operation}()`;
        console.log(`${errMsg}:`)
        if(err instanceof HttpErrorResponse) {
            console.log(`${err.message}`);
            console.log(`${err.error.error.message}`);
        } else {
            return Observable.throw(errMsg);
        }
        return Observable.throw(err);
    }
  }

}
