import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.scss']
})
export class IndexPlanetsComponent implements OnInit {

  planets: any = [];

  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.httpService
    .get('https://swapi.dev/api/planets')
    .subscribe( data => {
      this.planets = data;
    });
  };

}
