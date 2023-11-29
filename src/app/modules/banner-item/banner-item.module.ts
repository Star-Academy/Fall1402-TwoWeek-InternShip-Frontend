import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerItemComponent} from "../../components/banner-item/banner-item.component";



@NgModule({
  declarations: [BannerItemComponent],
  exports: [
    BannerItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BannerItemModule { }
