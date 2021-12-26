import { Component, OnInit } from '@angular/core';
import {Group} from '../../interfaces/Group';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../services/group.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {Profile} from '../../interfaces/Profile';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-group-manage',
  templateUrl: './group-manage.component.html',
  styleUrls: ['./group-manage.component.scss']
})
export class GroupManageComponent implements OnInit {
  group: Group | undefined;
  id: string;
  profiles: Profile[] = [];

  descConfig: AngularEditorConfig = {
    editable: true,
    enableToolbar: false,
    showToolbar: false
  };

  details: FormGroup = new FormGroup({
    groupName: new FormControl(''),
    groupDesc: new FormControl(''),
    groupMembers: new FormControl([]),
    groupAdmins: new FormControl([]),
  });

  constructor(private groupService: GroupService,
              private profileService: ProfileService,
              private route: ActivatedRoute,
              private location: Location) {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId === null) {
      this.back();
      this.id = '';
    } else {
      this.id = paramId;
    }
  }

  ngOnInit(): void {
    this.groupService.getGroupById(this.id)
      .subscribe(res => {
        console.log(res);
        this.group = res;

        this.details.get('groupName')?.setValue(this.group.name);
        this.details.get('groupDesc')?.setValue(this.group.desc);
        this.details.get('groupMembers')?.setValue(this.group.members);
        this.details.get('groupAdmins')?.setValue(this.group.admins);
    });
    this.profileService.getProfiles()
      .subscribe(res => {
        this.profiles = res.map(x => {
          return {
            ...x,
            fullName: `${x.firstName} ${x.lastName}`
          };
        });
      });
  }

  back(): void {
    this.location.back();
  }

  save(): void {
    const data: Group = {
      name: this.details.get('groupName')?.value,
      desc: this.details.get('groupDesc')?.value,
      creator: this.group?.creator,
      members: this.details.get('groupMembers')?.value,
      admins: this.details.get('groupAdmins')?.value
    };
    console.log(data);
    // this.groupService.update(this.id, data).subscribe(res => {
    //   console.log(res);
    //   this.back();
    // });
  }
}
