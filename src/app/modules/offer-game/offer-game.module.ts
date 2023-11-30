import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OfferGameComponent} from "../../pages/landing/component/offer-game/offer-game.component";



@NgModule({
  declarations: [OfferGameComponent],
  exports: [
    OfferGameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OfferGameModule { }
