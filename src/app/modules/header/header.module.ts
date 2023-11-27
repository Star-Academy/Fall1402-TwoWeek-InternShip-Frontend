import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpperHeaderComponent} from "../../components/upper-header/upper-header.component";
import {LowerHeaderComponent} from "../../components/lower-header/lower-header.component";



@NgModule({
  declarations: [
    UpperHeaderComponent,
    LowerHeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UpperHeaderComponent,
    LowerHeaderComponent,
  ],
})
export class HeaderModule { }
