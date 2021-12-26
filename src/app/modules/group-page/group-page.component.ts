import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Group} from '../../interfaces/Group';
import {GroupService} from '../../services/group.service';
import {Post} from '../../interfaces/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit {
  group: Group | undefined;
  id: string;
  posts: Post[];
  constructor(private groupService: GroupService,
              private postService: PostService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId != null) {
      this.id = paramId;
    } else {
      this.id = '';
      this.location.back();
    }
    this.posts = [];
  }

  ngOnInit(): void {
    console.log('group page init');
    this.groupService.getGroupById(this.id)
      .subscribe(group => {
        this.group = group;
    });
    this.postService.test();
    this.postService.getPostsByGroup(this.id)
      .subscribe(res => {
        console.log(res);
        this.posts = res;
      });
  }

  refresh(): void {
    this.postService.getPostsByGroup(this.id)
      .subscribe(res => {
        console.log(res);
        this.posts = res;
      });
  }
}
