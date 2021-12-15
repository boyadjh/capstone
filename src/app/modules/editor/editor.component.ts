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
  groups = [];
  constructor(private postService: PostService,
              private user: UserService,
              private groupService: GroupService) {
    this.userGroups = [];
  }

  ngOnInit(): void {
    this.userGroups = [];
    this.groupService.getGroups().subscribe(res => {
      console.log(res);
      this.userGroups = res;
    });
  }

  post(): void {
    console.log(this.groups);
    // this.postService.create({
    //   title: this.title,
    //   body: this.body,
    //   // @ts-ignore
    //   poster: this.user.getId()
    // }).subscribe(res => {
    //   console.log(res);
    // });
  }
}
