import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PopularGameComponent} from "../../pages/landing/component/popular-game/popular-game.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [PopularGameComponent],
  exports: [
    PopularGameComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage
  ]
})
export class PopularGameModule { }
