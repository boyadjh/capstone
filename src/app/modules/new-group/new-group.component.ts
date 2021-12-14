import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {GroupService} from '../../services/group.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {
  groupForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),

  });

  constructor(private location: Location,
              private user: UserService,
              private group: GroupService) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

  makeGroup(): void {
    const creator = this.user.getId();
    const data = {
      // @ts-ignore
      name: this.groupForm.get('name').value,
      // @ts-ignore
      desc: this.groupForm.get('desc').value,
      creator,
      members: [creator],
      admins: [creator]
    };
    // @ts-ignore
    this.group.create(data).subscribe(res => {
      console.log(res);
      this.back();
    });
  }
}
