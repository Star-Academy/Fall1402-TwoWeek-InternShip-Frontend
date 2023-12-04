import {Component, Input} from '@angular/core';

interface offerGameItemInterface {
    id: number,
    image: string,
    title: string,
    description: string,
    oldPrice: string,
    price: string,
}

@Component({
    selector: 'app-offer-game',
    templateUrl: './offer-game.component.html',
    styleUrl: './offer-game.component.scss'
})
export class OfferGameComponent {
    @Input() items: offerGameItemInterface[] = [];

    identify(index: number, item: offerGameItemInterface): number {
        return item.id;
    }
}
