import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-offer-game',
  templateUrl: './offer-game.component.html',
  styleUrl: './offer-game.component.scss'
})
export class OfferGameComponent {
  @Input() items: {image: string, title: string, description: string, oldPrice: string, price: string}[] = [];
}
