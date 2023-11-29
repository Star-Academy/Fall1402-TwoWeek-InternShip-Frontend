import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {LandingComponent} from "../../pages/landing/landing.component";
import {BannerModule} from "../banner/banner.module";
import {PopularGameModule} from "../popular-game/popular-game.module";



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    HeaderModule,
    BannerModule,
    PopularGameModule
  ],
})
export class LandingModule { }
