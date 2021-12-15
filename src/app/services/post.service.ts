import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../interfaces/Post';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private ENDP = 'http://localhost:3000/api/post';
  constructor(private http: HttpClient) { }

  getPosts(sort?: string): Observable<Post[]> {

    return this.http.get<any>(this.ENDP)
      .pipe(map(x => x.data));
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
}
