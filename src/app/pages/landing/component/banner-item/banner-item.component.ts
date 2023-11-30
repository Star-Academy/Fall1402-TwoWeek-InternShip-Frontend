import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrl: './banner-item.component.css'
})
export class BannerItemComponent {
 @Input() items: {icon: string, title: string, description: string}[] = [];
}
