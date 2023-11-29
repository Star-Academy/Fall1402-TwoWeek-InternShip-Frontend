import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerButtonComponent} from "../../components/banner-button/banner-button.component";



@NgModule({
  declarations: [BannerButtonComponent],
  exports: [
    BannerButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BannerButtonModule { }
