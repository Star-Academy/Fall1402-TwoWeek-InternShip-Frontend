import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FooterMenuComponent} from "../../components/footer-menu/footer-menu.component";
import {FooterSocialComponent} from "../../components/footer-social/footer-social.component";
import {FooterPhoneComponent} from "../../components/footer-phone/footer-phone.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [FooterPhoneComponent, FooterMenuComponent, FooterSocialComponent, FooterComponent,],
  exports: [
    FooterPhoneComponent,
    FooterMenuComponent,
    FooterSocialComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage
  ]
})
export class FooterModule { }
