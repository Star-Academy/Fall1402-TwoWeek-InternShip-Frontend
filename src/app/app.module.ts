import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingModule} from "./modules/landing/landing.module";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule,CommonModule, LandingModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
