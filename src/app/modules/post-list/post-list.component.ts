import {Component, Input, OnInit} from '@angular/core';

import {PostService} from '../../services/post.service';
import {Post} from '../../interfaces/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent{
  @Input() posts: Post[] | undefined;
}
