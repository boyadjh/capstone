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
  private ENDP = env.API_ENDPOINT + '/posts';
  constructor(private http: HttpClient) { }

  getPosts(sort = 'createdAt'): Observable<Post[]> {
    const params = new HttpParams()
      .set('sort', sort);
    return this.http.get<any>(this.ENDP, {params});
  }

  create(post: Post): Observable<Post> {
    return this.http.post<any>(this.ENDP, post)
      .pipe(map(postDoc => {
          if (postDoc) {
            return postDoc;
          } else {
            throw new Error('Problem creating post');
          }
        }), catchError(err => {
          throw err;
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
