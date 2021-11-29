import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor(private user: UserService,
              private profile: ProfileService) { }

  ngOnInit(): void {
  }

}
