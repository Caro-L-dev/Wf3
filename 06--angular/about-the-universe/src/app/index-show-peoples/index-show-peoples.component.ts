import { Component, OnInit } from '@angular/core';
import { People } from '../interfaces/people';

@Component({
  selector: 'app-index-show-peoples',
  templateUrl: './index-show-peoples.component.html',
  styleUrls: ['./index-show-peoples.component.scss']
})
export class IndexShowPeoplesComponent implements OnInit {
  people!: People;

  constructor() { }

  ngOnInit(): void {
  }

  showPeople($event: any) {
    this.people = $event;
    console.log(this.people);
  }
}