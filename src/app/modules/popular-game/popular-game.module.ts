import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopularGameComponent} from "../../components/popular-game/popular-game.component";



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
