import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OrganismComponent} from './organism/organism.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'organism', component: OrganismComponent},
];
