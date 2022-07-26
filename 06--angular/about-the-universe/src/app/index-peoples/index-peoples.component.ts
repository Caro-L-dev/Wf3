import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-peoples',
  templateUrl: './index-peoples.component.html',
  styleUrls: ['./index-peoples.component.scss']
})


export class IndexPeoplesComponent implements OnInit {

  peoples: any = [];
  peoplesSaved : any = [];
  countPeoples: any;
  countPages: any;

  @Output() sendPeopleToParent = new EventEmitter;
  
  showPeople(people: any) {
    this.sendPeopleToParent.emit(people);
  }


  constructor(private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.getCountPeoples();
    await this.getNumberPages();
    this.getPeoples();
  }

  async getCountPeoples(): Promise<void> {
    return new Promise( (resolve) => {
      this.httpClient.get("https://swapi.dev/api/people").subscribe( (pageOfPeoples: any) => {
        this.countPeoples = pageOfPeoples.count;
        resolve();
      });
    });
  }

  async getNumberPages(): Promise<void> {
    return new Promise( (resolve) => {
      this.countPages = Math.ceil(this.countPeoples / 10);
      resolve();
    })
  }

  getPeoples() {
    this.peoples = [];
    console.log(this.countPages);
    
    for (let index = 1; index <= this.countPages; index++) {
      this.httpClient.get("https://swapi.dev/api/people/?page=" + index ).subscribe((pageOfPeoples: any) => {
        this.peoples = this.peoples.concat(pageOfPeoples.results);
      this.peoplesSaved = this.peoplesSaved.concat(pageOfPeoples.results);
      })
    }
  };

  filterByGender(event: any) {
    this.peoples = this.peoplesSaved;

    if(event.target.value === "1"){
      this.peoples = this.peoples.filter((people: any )=> people.gender === "male");
    }
    if(event.target.value === "2"){
      this.peoples = this.peoples.filter((people: any )=> people.gender === "female");
    }
    if(event.target.value === "3"){
      this.peoples = this.peoples.filter((people: any )=> people.gender === "n/a" );
    }
    if(event.target.value === "4"){
      this.peoples = this.peoples.filter((people: any )=> people.gender === "hermaphrodite" );
    }
  };
}