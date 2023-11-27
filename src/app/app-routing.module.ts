import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";


import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full' , component: LandingComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
