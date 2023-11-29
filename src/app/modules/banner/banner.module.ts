import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from "../../components/banner/banner.component";
import {BannerItemComponent} from "../../components/banner-item/banner-item.component";
import {BannerItemModule} from "../banner-item/banner-item.module";
import {BannerButtonModule} from "../banner-button/banner-button.module";



@NgModule({
  declarations: [BannerComponent],
  exports: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    BannerItemModule,
    BannerButtonModule,
  ]
})
export class BannerModule { }
