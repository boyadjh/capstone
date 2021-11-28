import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    PostListComponent
  ],
  exports: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class PostListModule { }
