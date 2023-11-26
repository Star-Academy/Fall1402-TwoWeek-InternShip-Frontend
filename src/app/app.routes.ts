import { Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full' , component: LandingComponent},
  { path: '**', component: NotFoundComponent },
];
