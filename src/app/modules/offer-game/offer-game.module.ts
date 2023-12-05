import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {OfferGameComponent} from "../../pages/landing/component/offer-game/offer-game.component";
import {RouterLink} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [OfferGameComponent],
  exports: [
    OfferGameComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    FontAwesomeModule
  ]
})
export class OfferGameModule { }
