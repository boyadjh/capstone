import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {Group} from '../interfaces/Group';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private ENDP = 'http://localhost:3000/api/group';
  constructor(private http: HttpClient,
              private user: UserService) { }

  getGroupById(id: string): Observable<Group> {
    const query = {
      _id: id
    };

    const params = new HttpParams()
      .set('query', JSON.stringify(query));

    return this.http.get<any>(this.ENDP, {params})
      .pipe(map(_ => _.data[0]));
  }

  create(data: Group): Observable<Group> {
    return this.http.post<any>(this.ENDP, data)
      .pipe(
        catchError(_ => {
          console.log(_.error);
          return _;
        }),
        map(_ => {
          if (_.item) {
            return _.item;
          } else {
            throw new Error('Problem creating profile');
          }
        })
      );
  }

  getGroups(): Observable<Group[]> {
    const query = {
      members: {
        $in: [this.user.getId()]
      }
    };
    const params = new HttpParams()
      .set('query', JSON.stringify(query));

    return this.http.get<any>(this.ENDP, {params})
      .pipe(map(x => x.data));
  }
}
