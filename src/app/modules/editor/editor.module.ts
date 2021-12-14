import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TypeaheadModule} from "ngx-type-ahead";



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
    AngularEditorModule,
    FormsModule,
    TypeaheadModule
  ]
})
export class EditorModule { }
