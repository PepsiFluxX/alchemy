import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlchemyStationComponent } from './alchemy-station/alchemy-station.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }
  ,{ path: 'WorkBench', component: AlchemyStationComponent }
  ,{ path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
