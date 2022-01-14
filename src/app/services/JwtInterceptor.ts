import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from './user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      return next.handle(httpRequest.clone({setHeaders: {Authorization: 'Bearer ' + token}}));
    } else {
      return next.handle(httpRequest);
    }
  }
}
