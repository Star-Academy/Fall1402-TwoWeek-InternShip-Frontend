import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopularGameComponent} from "../../pages/landing/component/popular-game/popular-game.component";



@NgModule({
  declarations: [PopularGameComponent],
  exports: [
    PopularGameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PopularGameModule { }
