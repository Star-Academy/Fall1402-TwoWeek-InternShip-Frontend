import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrl: './banner-item.component.scss'
})
export class BannerItemComponent {
 @Input() items: {icon: string, title: string, description: string}[] = [];
}
