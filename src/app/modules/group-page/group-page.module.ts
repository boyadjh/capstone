import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupPageComponent} from './group-page.component';
import {PostListModule} from '../post-list/post-list.module';
import {EditorModule} from '../editor/editor.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [GroupPageComponent],
  exports: [GroupPageComponent],
  imports: [
    CommonModule,
    PostListModule,
    EditorModule,
    RouterModule
  ]
})
export class GroupPageModule { }
