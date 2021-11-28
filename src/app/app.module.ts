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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavModule,
    GroupsViewModule,
    GroupPageModule,
    DashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
