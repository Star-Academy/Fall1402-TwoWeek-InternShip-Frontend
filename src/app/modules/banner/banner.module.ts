import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from "../../pages/landing/component/banner/banner.component";
import {BannerItemComponent} from "../../pages/landing/component/banner-item/banner-item.component";
import {BannerButtonComponent} from "../../pages/landing/component/banner-button/banner-button.component";



@NgModule({
  declarations: [BannerComponent, BannerItemComponent, BannerButtonComponent],
  exports: [
    BannerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class BannerModule { }
