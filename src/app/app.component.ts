import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './services/user.service';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'capstone-frontend';
  loggedIn = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private user: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.user.login('john@morode.com', 'password').then(res => {
      if (res) {
        this.loggedIn = this.user.isLoggedIn();
      }
    }).catch(err => {
      console.log(err);
    });
  }

  login(): void {
    // @ts-ignore
    this.user.login(this.loginForm.get('email').value, this.loginForm.get('password').value).then(res => {
      if (res) {
        this.loggedIn = this.user.isLoggedIn();
      }
    }).catch(err => {
      console.log(err);
    });
  }
}
