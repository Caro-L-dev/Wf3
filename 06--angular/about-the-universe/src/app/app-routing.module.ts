import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexShowPlanetsComponent } from '../app/index-show-planets/index-show-planets.component';
import { IndexShowVehiclesComponent } from '../app/index-show-vehicles/index-show-vehicles.component';
import { IndexShowPeoplesComponent } from '../app/index-show-peoples/index-show-peoples.component';
import { NextMissionComponent } from './next-mission/next-mission.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'index-show-planets', component: IndexShowPlanetsComponent},
  {path: 'index-show-vehicles', component: IndexShowVehiclesComponent},
  {path: 'index-show-peoples', component: IndexShowPeoplesComponent},
  {path: 'next-mission', component: NextMissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
