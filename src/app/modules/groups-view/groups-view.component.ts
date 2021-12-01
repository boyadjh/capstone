import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../services/group.service';
import {Group} from '../../interfaces/Group';

@Component({
  selector: 'app-groups-view',
  templateUrl: './groups-view.component.html',
  styleUrls: ['./groups-view.component.scss']
})
export class GroupsViewComponent implements OnInit {
  groups: Group[] = [];
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.getGroups()
      .subscribe(groups => {
        console.log(groups);
        this.groups = groups;
    });
  }
}
