import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../interfaces/Post';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private ENDP = 'http://localhost:3000/api/post';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<any>(this.ENDP)
      .pipe(map(x => x.data));
  }
}
