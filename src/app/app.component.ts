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
  }

  createAccount(): void {
    const data = {
      firstName: this.signupForm.get('firstName')?.value,
      lastName: this.signupForm.get('lastName')?.value,
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.get('password')?.value,
      groups: []
    };

    data.firstName[0].toUpperCase();
    data.lastName[0].toUpperCase();

    this.user.signup(data).subscribe(user => {
      if (user) {
        this.loggedIn = true;
        this.signup = false;
        this.loginForm.reset();
        this.signupForm.reset();
      }
    });
  }
}
