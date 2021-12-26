import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupManageComponent} from './group-manage.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {TypeaheadModule} from 'ngx-type-ahead';



@NgModule({
  declarations: [
    GroupManageComponent
  ],
  exports: [
    GroupManageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    TypeaheadModule
  ]
})
export class GroupManageModule { }
