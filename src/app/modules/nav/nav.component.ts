import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() logoutClicked = new EventEmitter();

  constructor(private user: UserService,
              private route: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    console.log('test');
    this.user.logout();
    this.route.navigate(['']);
    this.logoutClicked.emit();
  }
}
