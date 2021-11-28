import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupPageComponent} from './group-page.component';



@NgModule({
  declarations: [GroupPageComponent],
  exports: [GroupPageComponent],
  imports: [
    CommonModule
  ]
})
export class GroupPageModule { }
