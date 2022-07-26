import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-show-peoples',
  templateUrl: './index-show-peoples.component.html',
  styleUrls: ['./index-show-peoples.component.scss']
})
export class IndexShowPeoplesComponent implements OnInit {
  people: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  showPeople($event: any) {
    this.people = $event;
    console.log(this.people);
  }
}