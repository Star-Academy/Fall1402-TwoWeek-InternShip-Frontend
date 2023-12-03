import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner-button',
  templateUrl: './banner-button.component.html',
  styleUrl: './banner-button.component.scss'
})
export class BannerButtonComponent {
  @Input() item: {style: string, text: string, link: string} = {style: "", text: "", link: ""};
}
