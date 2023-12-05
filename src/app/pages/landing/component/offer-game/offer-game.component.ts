import {Component, Input} from '@angular/core';
import {offerGameItem} from "../../models/offer-game";
import {faArrowLeft, faArrowRight, faCartShopping, faPercent} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-offer-game',
    templateUrl: './offer-game.component.html',
  styleUrls:['./offer-game.component.scss']
})
export class OfferGameComponent {
    @Input() public items: offerGameItem[] = [];

    public identify(index: number, item: offerGameItem): number {
        return item.id;
    }

    public faArrowLeft = faArrowLeft;

    public faArrowRight = faArrowRight;

    public faCartShopping = faCartShopping;

    public faPercent = faPercent;
}
