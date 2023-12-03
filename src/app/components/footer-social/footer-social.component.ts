import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrl: './footer-social.component.scss'
})
export class FooterSocialComponent {
  @Input() items: { link: string, icon: string }[] = [];
}
