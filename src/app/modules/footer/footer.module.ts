import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterMenuComponent} from "../../components/footer-menu/footer-menu.component";
import {FooterSocialComponent} from "../../components/footer-social/footer-social.component";
import {FooterPhoneComponent} from "../../components/footer-phone/footer-phone.component";


@NgModule({
  declarations: [FooterPhoneComponent, FooterMenuComponent, FooterSocialComponent],
  exports: [
    FooterPhoneComponent,
    FooterMenuComponent,
    FooterSocialComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
