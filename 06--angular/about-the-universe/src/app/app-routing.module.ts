import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';
import { IndexShowVehiclesComponent } from './index-show-vehicles/index-show-vehicles.component';
import { IndexShowPeoplesComponent } from './index-show-peoples/index-show-peoples.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'index-show-planets', component: IndexShowPlanetsComponent},
  {path: 'index-show-vehicles', component: IndexShowVehiclesComponent},
  {path: 'index-show-peoples', component: IndexShowPeoplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
