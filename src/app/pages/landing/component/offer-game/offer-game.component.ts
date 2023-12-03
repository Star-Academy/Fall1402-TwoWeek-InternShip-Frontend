import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-offer-game',
    templateUrl: './offer-game.component.html',
    styleUrl: './offer-game.component.scss'
})
export class OfferGameComponent {
    @Input() items: { id: number, image: string, title: string, description: string, oldPrice: string, price: string }[] = [];

    identify(index: number, item: { id: number, image: string, title: string, description: string, oldPrice: string, price: string }): number {
        return item.id;
    }
}
