import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.scss']
})


export class IndexPlanetsComponent implements OnInit {

  planets: any = [];
  planetsSaved : any = [];
  countPlanets: any;
  countPages: any;

  @Output() sendPlanetToParent = new EventEmitter;
  
  showPlanet(planet: any) {
    this.sendPlanetToParent.emit(planet);
  }


  constructor(private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.getCountPlanets();
    await this.getNumberPages();
    this.getPlanets();
  }

  async getCountPlanets(): Promise<void> {
    return new Promise( (resolve) => {
      this.httpClient.get("https://swapi.dev/api/planets").subscribe( (pageOfPlanets: any) => {
        this.countPlanets = pageOfPlanets.count;
        resolve();
      });
    });
  }

  async getNumberPages(): Promise<void> {
    return new Promise( (resolve) => {
      this.countPages = Math.ceil(this.countPlanets / 10);
      resolve();
    })
  }

  getPlanets() {
    this.planets = [];
//    console.log(this.countPages);
    
    for (let index = 1; index <= this.countPages; index++) {
      this.httpClient.get("https://swapi.dev/api/planets/?page=" + index ).subscribe((pageOfPlanets: any) => {
        this.planets = this.planets.concat(pageOfPlanets.results);
      this.planetsSaved = this.planetsSaved.concat(pageOfPlanets.results);
      })
    }
  };

  filterByPopulation(event: any) {
    this.planets = this.planetsSaved;
   // console.log(this.planets);
    if(event.target.value === "1"){
      this.planets = this.planets.filter((planet: any )=> planet.population <= 100000);
    }
    if(event.target.value === "2"){
      this.planets = this.planets.filter((planet: any )=> planet.population <= 100000 && planet.population <= 100000000);
    }
    if(event.target.value === "3"){
      this.planets = this.planets.filter((planet: any )=> planet.population <= 100000000 );
    }
  };
}





