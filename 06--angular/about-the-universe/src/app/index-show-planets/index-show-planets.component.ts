import { Component, OnInit } from '@angular/core';
import {Planet} from "../interfaces/planet";

@Component({
  selector: 'app-index-show-planets',
  templateUrl: './index-show-planets.component.html',
  styleUrls: ['./index-show-planets.component.scss']
})
export class IndexShowPlanetsComponent implements OnInit {
  planet!: Planet;

  constructor() { }

  ngOnInit(): void {
  }

  showPlanet($event: any) {
    this.planet = $event;
  }
}