import {Component, Input} from '@angular/core';
import {offerGameItem} from "../../modules/offer-game";

@Component({
    selector: 'app-offer-game',
    templateUrl: './offer-game.component.html',
    styleUrl: './offer-game.component.scss'
})
export class OfferGameComponent {
    @Input() public items: offerGameItem[] = [];

    public identify(index: number, item: offerGameItem): number {
        return item.id;
    }
}
