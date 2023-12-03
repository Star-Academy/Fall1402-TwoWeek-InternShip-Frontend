import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrl: './footer-menu.component.scss'
})
export class FooterMenuComponent {
  @Input() items: { link: string, text: string }[] = [];
}
