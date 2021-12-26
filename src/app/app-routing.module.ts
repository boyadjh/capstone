import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupsViewComponent} from './modules/groups-view/groups-view.component';
import {GroupPageComponent} from './modules/group-page/group-page.component';
import {DashComponent} from './modules/dash/dash.component';
import {NewGroupComponent} from './modules/new-group/new-group.component';
import {GroupManageComponent} from './modules/group-manage/group-manage.component';

const routes: Routes = [
  {path: '', redirectTo: '/dash', pathMatch: 'full'},
  {path: 'dash', component: DashComponent},
  {path: 'groups', component: GroupsViewComponent},
  {path: 'group/new', component: NewGroupComponent},
  {path: 'group/:id', component: GroupPageComponent},
  {path: 'group/:id/manage', component: GroupManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
