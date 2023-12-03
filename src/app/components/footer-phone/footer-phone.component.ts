import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer-phone',
  templateUrl: './footer-phone.component.html',
  styleUrl: './footer-phone.component.scss'
})
export class FooterPhoneComponent {
  @Input() items: string[] = [];
}
