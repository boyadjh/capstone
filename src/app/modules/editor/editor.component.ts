import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PostService} from '../../services/post.service';
import {UserService} from '../../services/user.service';
import {GroupService} from '../../services/group.service';
import {Group} from '../../interfaces/Group';
import {AngularEditorComponent, AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() groupId = '';
  @Output() postsChange = new EventEmitter();
  title = '';
  body = '';
  groupName = '';
  userGroups: Group[];
  groups: string[];

  conf: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'consolas', name: 'Consolas'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'heading',
        'subscript',
        'superscript',

      ],
      [
        'textColor',
        'backgroundColor',
        'customClasses',
        'insertImage',
        'insertVideo',
        'indent',
        'outdent',
        'removeFormat',
        'toggleEdtiorMode'
      ]
    ]
  };

  constructor(private postService: PostService,
              private user: UserService,
              private groupService: GroupService) {
    this.userGroups = [];
    this.groups = [this.groupId];
  }

  ngOnInit(): void {
    // this.userGroups = [];
    // this.groupService.getGroups().subscribe(res => {
    //   this.userGroups = res;
    // });
    // this.groupService.getGroupById(this.groupId).subscribe(res => {
    //   this.groupName = res.name;
    // });
    // if (this.groupId) {
    //   this.groups.push(this.groupId);
    // }
  }

  post(): void {
    const userId = this.user.user?._id;
    if (typeof userId === 'string') {
      this.postService.create({
        title: this.title,
        body: this.body,
        poster: userId,
        groups: this.groups
      }).subscribe(res => {
        console.log(res);
        this.postsChange.emit();
        this.title = '';
        this.body = '';
        this.groups = [];
      });
    }
  }
}
