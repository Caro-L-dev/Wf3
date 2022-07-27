import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Component({
  selector: 'app-index-show-vehicles',
  templateUrl: './index-show-vehicles.component.html',
  styleUrls: ['./index-show-vehicles.component.scss']
})
export class IndexShowVehiclesComponent implements OnInit {
  vehicle!: Vehicle;

  constructor() { }

  ngOnInit(): void {
  }

  showVehicles($event: any) {
    this.vehicle = $event;
  }

}