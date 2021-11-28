import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupsViewComponent} from './groups-view.component';
import {MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [GroupsViewComponent],
  exports: [GroupsViewComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ]
})
export class GroupsViewModule { }
