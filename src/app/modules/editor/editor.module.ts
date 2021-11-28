import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    EditorComponent
  ],
  exports: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularEditorModule
  ]
})
export class EditorModule { }
