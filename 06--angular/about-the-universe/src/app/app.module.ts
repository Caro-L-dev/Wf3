import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';
import { IndexPlanetsComponent } from './index-planets/index-planets.component';
import { IndexVehiclesComponent } from './index-vehicles/index-vehicles.component';
import { IndexShowVehiclesComponent } from './index-show-vehicles/index-show-vehicles.component';
import { IndexPeoplesComponent } from './index-peoples/index-peoples.component';
import { IndexShowPeoplesComponent } from './index-show-peoples/index-show-peoples.component';

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
    IndexShowPeoplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }