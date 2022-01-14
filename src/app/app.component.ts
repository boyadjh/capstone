import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './services/user.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ProfileService} from './services/profile.service';
import {Profile} from './interfaces/Profile';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'capstone-frontend';
  loggedIn = false;
  signup = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private user: UserService,
              private router: Router) {}

  ngOnInit(): void {
    const hasToken = !(!localStorage.getItem('token'));
    if (hasToken) {this.login(); console.log('logging in'); }
  }

  login(): void {
    const data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
    this.user.login(data).subscribe(user => {
      if (user) {
        this.loggedIn = true;
      }
    });

    // @ts-ignore
    // this.user.login(this.loginForm.get('email').value, this.loginForm.get('password').value).then(res => {
    //   this.loggedIn = this.user.isLoggedIn();
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  createAccount(): void {}
  // createAccount(): void {
  //
  //
  //   const data: Profile = {
  //     // @ts-ignore
  //     firstName: this.signupForm.get('firstName').value,
  //     // @ts-ignore
  //     lastName: this.signupForm.get('lastName').value,
  //     // @ts-ignore
  //     email: this.signupForm.get('email').value,
  //     // @ts-ignore
  //     hash: this.signupForm.get('password').value,
  //
  //   };
  //   this.user.createAndLogin(data).then(res => {
  //     this.loggedIn = this.user.isLoggedIn();
  //   }).catch(err => {
  //     console.log('error signing in');
  //   });
  // }
}
