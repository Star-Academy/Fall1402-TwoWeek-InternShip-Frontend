import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {OfferGameComponent} from "../../pages/landing/component/offer-game/offer-game.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [OfferGameComponent],
  exports: [
    OfferGameComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage
  ]
})
export class OfferGameModule { }
