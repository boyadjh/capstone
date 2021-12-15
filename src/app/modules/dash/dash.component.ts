import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ProfileService} from '../../services/profile.service';
import {Post} from '../../interfaces/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  posts: Post[];
  constructor(private user: UserService,
              private profile: ProfileService,
              private postService: PostService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.postService.getPosts()
    .subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}


