import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from '../interfaces/Profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: Profile | undefined;
  constructor(private profile: ProfileService) { }

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

  logout(): void {
    this.user = undefined;
  }

  login(email: string, password: string): Promise<boolean> {
    const p = new Promise<boolean>((res, rej) => {
      this.profile.login(email, password).subscribe(profile => {
        if (profile) {
          this.user = profile;
          res(true);
        } else {
          rej('invalid login');
        }
      });
    });
    return p;
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  getName(): string {
    return this.user?.firstName + ' ' + this.user?.lastName;
  }
}
