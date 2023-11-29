import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-phone',
  templateUrl: './footer-phone.component.html',
  styleUrl: './footer-phone.component.css'
})
export class FooterPhoneComponent {
  @Input() items!: string[];
}
