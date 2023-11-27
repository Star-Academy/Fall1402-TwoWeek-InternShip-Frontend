import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {LandingComponent} from "../../pages/landing/landing.component";



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    HeaderModule,
  ],
})
export class LandingModule { }
