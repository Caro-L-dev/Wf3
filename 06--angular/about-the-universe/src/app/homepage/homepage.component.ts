import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  SWAPI_PEOPLE_URL = 'https://swapi.dev/api/people/1/';
  people: any = [];
  vehicles: any = [];
  planets: any = [];

  // Injecter le service
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getPeople();
    this.getVehicles();
    this.getPlanets();
  };

  getPeople() {
    this.httpService
    .get('https://swapi.dev/api/people')
    .subscribe( data => {
      this.people = data;
    });
  };

  getVehicles() {
    this.httpService
    .get('https://swapi.dev/api/vehicles')
    .subscribe( data => {
      this.vehicles = data;
    });
  };

  getPlanets() {
    this.httpService
    .get('https://swapi.dev/api/planets')
    .subscribe( data => {
      this.planets = data;
    });
  };

};