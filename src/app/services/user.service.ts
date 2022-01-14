import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from '../interfaces/Profile';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ENDP = env.API_ENDPOINT + '/users';

  public user: User | undefined;
  constructor(private profile: ProfileService,
              private http: HttpClient) { }

  // setUserByID(id: string): Promise<boolean> {
  //   const p = new Promise<boolean>((res, rej) => {
  //     this.profile.getProfileById(id).subscribe(profile => {
  //       if (profile) {
  //         this.user = profile;
  //         res(true);
  //       } else {
  //         rej('profile doesn\'t exist');
  //       }
  //     });
  //   });
  //   return p;
  // }

  login(data: {email: string, password: string}): Observable<User|void> {
    return this.http.post<any>(env.API_ENDPOINT + '/login', data)
      .pipe(map(res => {
          if (res.error) {
            throw new Error('Error creating user: ' + res.error);
          } else {
            if (res.token) {
              localStorage.setItem('token', res.token);
              this.user = res.user;
              return res.user;
            } else {
              throw new Error('No token received');
            }
          }

      }), catchError(err => {
        throw err;
      }
      ));
        // if (!res.error) {
        //   throw new Error(`Problem creating user: ${res.error}`);
        // }
        // if (res.user && res.token) {
        //   localStorage.setItem('token', res.token);
        //   return res.user;
        // } else {
        //   throw new Error('Problem creating user...')
        // }
      // }));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.user = undefined;
  }

  // createAndLogin(data: Profile): Promise<boolean> {
  //   return new Promise<boolean>((res, rej) => {
  //     this.profile.create(data).subscribe(profile => {
  //       if (profile) {
  //         this.user = profile;
  //         res(true);
  //       } else {
  //         rej('invalid login');
  //       }
  //     });
  //   });
  // }

}
