import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from "../../components/banner/banner.component";
import {BannerItemComponent} from "../../components/banner-item/banner-item.component";
import {BannerButtonComponent} from "../../components/banner-button/banner-button.component";



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
