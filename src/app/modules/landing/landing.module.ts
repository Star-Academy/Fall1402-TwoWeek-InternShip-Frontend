import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {LandingComponent} from "../../pages/landing/landing.component";
import {BannerModule} from "../banner/banner.module";
import {PopularGameModule} from "../popular-game/popular-game.module";
import {OfferGameModule} from "../offer-game/offer-game.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    HeaderModule,
    BannerModule,
    PopularGameModule,
    OfferGameModule,
    FooterModule
  ],
})
export class LandingModule { }
