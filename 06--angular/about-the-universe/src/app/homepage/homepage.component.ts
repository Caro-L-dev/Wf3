import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  SWAPI_PEOPLE_URL = 'https://swapi.dev/api/people/1/';
  character: any = [];

  // Injecter le service
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getCharacter();
  };

  getCharacter() {
    this.httpService
    .get(this.SWAPI_PEOPLE_URL)
    .subscribe( data => {
      this.character = data;
    })
  }
};