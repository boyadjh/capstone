import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpResponse} from '../interfaces/HttpResponse';
import {catchError, map} from 'rxjs/operators';
import {Profile} from '../interfaces/Profile';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private ENDP = 'http://localhost:3000/api/profile';
  constructor(private http: HttpClient) { }
  getProfileById(id: string): Observable<Profile> {
    const params = new HttpParams()
      .set('_id', id);

    return this.http.get<HttpResponse>(this.ENDP, {params})
      .pipe(map(_ => {
        if (_.data) {
          return _.data[0];
        } else {
          throw new Error(`Error getting profile with id: '${id}'`);
        }
        })
      );
  }
  login(email: string, password: string): Observable<Profile> {
    const params = new HttpParams()
      .set('email', email)
      .set('hash', password);

    return this.http.get<HttpResponse>(this.ENDP, {params})
      .pipe(map(_ => {
        if (_.data) {
          return _.data[0];
        } else {
          throw new Error('No profile found for given credentials');
        }
        })
      );
  }
}
