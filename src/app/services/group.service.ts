import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Group} from '../interfaces/Group';
import {HttpResponse} from '../interfaces/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private ENDP = 'http://localhost:3000/api/group';
  constructor(private http: HttpClient) { }

  getGroupById(id: string): Observable<Group> {

    const params = new HttpParams()
      .set('_id', id);

    return this.http.get<HttpResponse>(this.ENDP, {params})
      .pipe(map(_ => _.data[0]));
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<HttpResponse>(this.ENDP)
      .pipe(map(x => x.data));
  }
}
