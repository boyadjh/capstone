import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupPageComponent} from './group-page.component';
import {PostListModule} from '../post-list/post-list.module';
import {EditorModule} from '../editor/editor.module';



@NgModule({
  declarations: [GroupPageComponent],
  exports: [GroupPageComponent],
  imports: [
    CommonModule,
    PostListModule,
    EditorModule
  ]
})
export class GroupPageModule { }
