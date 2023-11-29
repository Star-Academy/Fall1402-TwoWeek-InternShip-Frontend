import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-button',
  templateUrl: './banner-button.component.html',
  styleUrl: './banner-button.component.css'
})
export class BannerButtonComponent {
  @Input() item?: {style: string, text: string, link: string};
}
