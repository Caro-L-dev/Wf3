import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-show-vehicles',
  templateUrl: './index-show-vehicles.component.html',
  styleUrls: ['./index-show-vehicles.component.scss']
})
export class IndexShowVehiclesComponent implements OnInit {
  vehicle: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  showVehicles($event: any) {
    this.vehicle = $event;
  }

}

