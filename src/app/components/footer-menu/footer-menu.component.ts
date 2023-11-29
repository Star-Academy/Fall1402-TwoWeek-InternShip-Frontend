import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrl: './footer-menu.component.css'
})
export class FooterMenuComponent {
  @Input() items!: {link: string, text: string}[];
}
