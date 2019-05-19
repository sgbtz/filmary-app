import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";

import { AuthGuard } from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/login',
    component: HomeComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'catalogue/result',
    component: CatalogueComponent,
    canActivate: [ AuthGuard ]
  }

];
