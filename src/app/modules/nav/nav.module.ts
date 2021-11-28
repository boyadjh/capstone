import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavComponent} from './nav.component';
import {MatIconModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ]
})
export class NavModule { }
