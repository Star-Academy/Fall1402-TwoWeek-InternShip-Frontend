import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {UpperHeaderComponent} from "../../components/upper-header/upper-header.component";
import {LowerHeaderComponent} from "../../components/lower-header/lower-header.component";
import {RouterLink} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    UpperHeaderComponent,
    LowerHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    FontAwesomeModule,
  ],
  exports: [
    UpperHeaderComponent,
    LowerHeaderComponent,
  ],
})
export class HeaderModule {
}
