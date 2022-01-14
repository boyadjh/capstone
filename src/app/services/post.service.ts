import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Post } from '../interfaces/Post';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {environment as env} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private ENDP = env.API_ENDPOINT + '/users';
  constructor(private http: HttpClient) { }

  getPosts(sort?: string): Observable<Post[]> {
    return this.http.get<any>(this.ENDP)
      .pipe(map(x => {console.log(x); return x.data; }));
  }

  create(post: Post): Observable<Post> {
    return this.http.post<any>(this.ENDP, post)
      .pipe(
        catchError(_ => {
          console.log(_.error);
          return _;
        }),
        map(_ => {
          if (_.item) {
            return _.item;
          } else {
            throw new Error('Problem creating post');
          }
        })
      );
  }

  test(): void {
    this.http.get<any>(`${this.ENDP}/test`)
      .subscribe(res => {
        console.log(res);
      });
  }

  getPostsByGroup(id: string): Observable<Post[]> {
    const query = {
      groups: {
        $in: [id]
      }
    };

    const params = new HttpParams()
      .set('query', JSON.stringify(query));

    return this.http.get<any>(this.ENDP, {params})
      .pipe(map(x => x.data));
  }
}
