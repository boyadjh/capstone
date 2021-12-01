import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {
  groupForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),

  });

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

  makeGroup(): void {

  }
}
