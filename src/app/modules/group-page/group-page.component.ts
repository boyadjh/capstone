import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Group} from '../../interfaces/Group';
import {GroupService} from '../../services/group.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit {
  group: Group | undefined;
  id: string | null;
  constructor(private groupService: GroupService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (typeof this.id === 'string') {
      this.groupService.getGroupById(this.id)
        .subscribe(group => {
          console.log(group);
          this.group = group;
      });
    }
  }

}
