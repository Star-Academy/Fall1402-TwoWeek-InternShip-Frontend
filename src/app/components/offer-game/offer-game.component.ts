import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-game',
  templateUrl: './offer-game.component.html',
  styleUrl: './offer-game.component.css'
})
export class OfferGameComponent {
  @Input() items!: {image: string, title: string, description: string, oldPrice: string, price: string}[];
}
