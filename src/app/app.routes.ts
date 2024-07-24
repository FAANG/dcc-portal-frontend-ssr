import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OrganismComponent} from './organism/organism.component';
import {OrganismDetailComponent} from './organism/organism-detail/organism-detail.component';
import {SpecimenComponent} from './specimen/specimen.component';
import {SpecimenDetailComponent} from './specimen/specimen-detail/specimen-detail.component';
import {DatasetComponent} from './dataset/dataset.component';
import {DatasetDetailComponent} from './dataset/dataset-detail/dataset-detail.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'organism', component: OrganismComponent},
  {path: 'organism/:id', component: OrganismDetailComponent},
  {path: 'specimen', component: SpecimenComponent},
  {path: 'specimen/:id', component: SpecimenDetailComponent},
  {path: 'dataset', component: DatasetComponent},
  {path: 'dataset/:id', component: DatasetDetailComponent},
];
