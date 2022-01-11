import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupsViewComponent} from './groups-view.component';
import {MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [GroupsViewComponent],
  exports: [GroupsViewComponent],
    imports: [
        CommonModule,
        MatListModule,
        RouterModule,
        MatIconModule
    ]
})
export class GroupsViewModule { }
