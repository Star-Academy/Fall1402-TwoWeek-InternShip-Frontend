import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrl: './footer-social.component.css'
})
export class FooterSocialComponent {
  @Input() items!: {link: string, icon: string}[];
}
