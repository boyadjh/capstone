import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material';
import {NewGroupComponent} from './new-group.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NewGroupComponent
  ],
  exports: [
    NewGroupComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class NewGroupModule { }
