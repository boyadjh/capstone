import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {UserService} from '../../services/user.service';
import {GroupService} from '../../services/group.service';
import {Group} from '../../interfaces/Group';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  title = '';
  body = '';
  userGroups: Group[];
  groups: string[];
  constructor(private postService: PostService,
              private user: UserService,
              private groupService: GroupService) {
    this.userGroups = [];
    this.groups = [];
  }

  ngOnInit(): void {
    this.userGroups = [];
    this.groupService.getGroups().subscribe(res => {
      this.userGroups = res;
    });
  }

  post(): void {
    const userId = this.user.getId();
    if (typeof userId === 'string') {
      this.postService.create({
        title: this.title,
        body: this.body,
        poster: userId,
        groups: this.groups
      }).subscribe(res => {
        console.log(res);
      });
    }
  }
}
