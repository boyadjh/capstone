import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  title = '';
  body = '';
  test = ['one', 'two', 'three', 'four'];
  model: string[] = [];
  constructor(private postService: PostService,
              private user: UserService) { }

  ngOnInit(): void {
  }

  post(): void {
    this.postService.create({
      title: this.title,
      body: this.body,
      // @ts-ignore
      poster: this.user.getId()
    }).subscribe(res => {
      console.log(res);
    });
  }
}
