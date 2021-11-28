import { Component, OnInit } from '@angular/core';

import {PostService} from '../../services/post.service';
import {Post} from '../../interfaces/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) { }
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        console.log(posts);
        this.posts = posts;
      });
  }
}
