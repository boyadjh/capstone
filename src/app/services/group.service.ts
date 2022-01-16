import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { environment as env } from '../../environments/environment';

import {Group} from '../interfaces/Group';
import {Post} from '../interfaces/Post';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private ENDP = env.API_ENDPOINT + '/groups/';
  constructor(private http: HttpClient,
              private user: UserService) { }

    getGroups(): Observable<Group[]> {
      return this.http.get<any>(this.ENDP);
    }

    getGroup(id: string): Observable<Group> {
      return this.http.get<any>(this.ENDP + id);
    }

    getPosts(id: string, sort = 'createdAt'): Observable<Post[]> {
      const params = new HttpParams()
        .set('sort', sort);
      return this.http.get<any>(this.ENDP + id + '/posts/', {params});
    }

    create(data: {}): Observable<Group> {
    return this.http.post<any>(this.ENDP, data);
    }

    update(data: {}, id: string): Observable<Group> {
      return this.http.put<any>(this.ENDP + id, data);
    }

  // getGroupById(id: string): Observable<Group> {
  //   console.log('getting group with id: ', id);
  //   const query = {
  //     _id: id
  //   };
  //
  //   const params = new HttpParams()
  //     .set('query', JSON.stringify(query));
  //
  //   return this.http.get<any>(this.ENDP, {params})
  //     .pipe(map(_ => _.data[0]));
  // }
  //
  // update(id: string, data: Group): Observable<Group> {
  //   return this.http.put<any>(`${this.ENDP}/${id}`, data)
  //     .pipe(
  //       catchError(_ => {
  //         console.log(_.error);
  //         return _;
  //       }),
  //       map(_ => {
  //         if (_.item) {
  //           return _.item;
  //         } else {
  //           throw new Error('Problem updating Group');
  //         }
  //       })
  //     );
  // }
  //
  // create(data: Group): Observable<Group> {
  //   return this.http.post<any>(this.ENDP, data)
  //     .pipe(
  //       catchError(_ => {
  //         console.log(_.error);
  //         return _;
  //       }),
  //       map(_ => {
  //         if (_.item) {
  //           return _.item;
  //         } else {
  //           throw new Error('Problem creating profile');
  //         }
  //       })
  //     );
  // }

  // getGroups(): Observable<Group[]> {
  //   const query = {
  //     members: {
  //       $in: [this.user.getId()]
  //     }
  //   };
  //   const params = new HttpParams()
  //     .set('query', JSON.stringify(query));
  //
  //   return this.http.get<any>(this.ENDP, {params})
  //     .pipe(map(x => x.data));
  // }
}
