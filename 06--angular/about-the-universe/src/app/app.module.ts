import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexShowPlanetsComponent } from '../app/index-show-planets/index-show-planets.component';
import { IndexPlanetsComponent } from '../app/index-planets/index-planets.component';
import { IndexVehiclesComponent } from '../app/index-vehicles/index-vehicles.component';
import { IndexShowVehiclesComponent } from '../app/index-show-vehicles/index-show-vehicles.component';
import { IndexPeoplesComponent } from '../app/index-peoples/index-peoples.component';
import { IndexShowPeoplesComponent } from '../app/index-show-peoples/index-show-peoples.component';
import { NextMissionComponent } from './next-mission/next-mission.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    IndexShowPlanetsComponent,
    IndexPlanetsComponent,
    IndexVehiclesComponent,
    IndexShowVehiclesComponent,
    IndexPeoplesComponent,
    IndexShowPeoplesComponent,
    NextMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }