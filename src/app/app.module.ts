import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NavModule} from './modules/nav/nav.module';
import {GroupsViewModule} from './modules/groups-view/groups-view.module';
import {GroupPageModule} from './modules/group-page/group-page.module';
import {DashModule} from './modules/dash/dash.module';
import {HomeComponent} from './components/home/home.component';
import {EditorModule} from './modules/editor/editor.module';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {NewGroupModule} from './modules/new-group/new-group.module';
import {GroupManageModule} from './modules/group-manage/group-manage.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavModule,
    GroupsViewModule,
    NewGroupModule,
    GroupPageModule,
    EditorModule,
    DashModule,
    GroupManageModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
