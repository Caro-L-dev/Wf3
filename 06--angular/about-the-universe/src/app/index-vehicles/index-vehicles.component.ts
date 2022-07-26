import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-vehicles',
  templateUrl: './index-vehicles.component.html',
  styleUrls: ['./index-vehicles.component.scss']
})


export class IndexVehiclesComponent implements OnInit {

  vehicles: any = [];
  vehiclesSaved : any = [];
  countVehicles: any;
  countPages: any;

  @Output() sendVehicleToParent = new EventEmitter;
  
  showVehicle(vehicle: any) {
    this.sendVehicleToParent.emit(vehicle);
  }


  constructor(private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.getCountVehicles();
    await this.getNumberPages();
    this.getVehicles();
  }

  async getCountVehicles(): Promise<void> {
    return new Promise( (resolve) => {
      this.httpClient.get("https://swapi.dev/api/vehicles").subscribe( (pageOfVehicles: any) => {
        this.countVehicles = pageOfVehicles.count;
        resolve();
      });
    });
  }

  async getNumberPages(): Promise<void> {
    return new Promise( (resolve) => {
      this.countPages = Math.ceil(this.countVehicles / 10);
      resolve();
    })
  }

  getVehicles() {
    this.vehicles = [];
    console.log(this.countPages);
    
    for (let index = 1; index <= this.countPages; index++) {
      this.httpClient.get("https://swapi.dev/api/vehicles/?page=" + index ).subscribe((pageOfVehicles: any) => {
        this.vehicles = this.vehicles.concat(pageOfVehicles.results);
      this.vehiclesSaved = this.vehiclesSaved.concat(pageOfVehicles.results);
      })
    }
  };

  filterByPrice(event: any) {
    this.vehicles = this.vehiclesSaved;
    console.log(this.vehicles);
    if(event.target.value === "1"){
      this.vehicles = this.vehicles.filter((vehicle: any )=> vehicle.cost_in_credits <= 10000);
    }
    if(event.target.value === "2"){
      this.vehicles = this.vehicles.filter((vehicle: any )=> vehicle.cost_in_credits >= 10000 && vehicle.cost_in_credits <= 100000);
    }
    if(event.target.value === "3"){
      this.vehicles = this.vehicles.filter((vehicle: any )=> vehicle.cost_in_credits <= 100000 );
    }
  };
}





