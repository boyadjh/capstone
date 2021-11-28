import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import {EditorModule} from '../editor/editor.module';
import {PostListModule} from '../post-list/post-list.module';



@NgModule({
  declarations: [
    DashComponent
  ],
  exports: [
    DashComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    PostListModule
  ]
})
export class DashModule { }
