import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // Exercice 1
  bgColor: any;

  getColor(event: any) {
    this.bgColor = event.target.value;
  };

  // Exercice 2
  visibility: boolean = false;
  buttonName: any = 'Apparition du hello';

  getVisibility() {
    this.visibility = !this.visibility;

    // change btn name
    if (this.visibility)
      this.buttonName = "Disparition du hello";
    else
      this.buttonName = "Apparition du hello";
  };

  // Exercice 3
  users: any[] = [
    {
      firstName: 'Jean',
      lastName: 'Bon'
    },
    {
      firstName : 'John',
      lastName: 'Doe'
    },
    {
      firstName : 'Jean',
      lastName: 'Neymar'
    }
  ]

};
