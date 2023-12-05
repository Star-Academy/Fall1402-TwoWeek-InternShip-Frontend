import {Component, Input} from '@angular/core';
import {optionItem} from "../../modules/banner-option";

@Component({
    selector: 'app-banner-item',
    templateUrl: './banner-item.component.html',
    styleUrl: './banner-item.component.scss'
})
export class BannerItemComponent {
    @Input() public items: optionItem[] = [];

    public identify(index: number, item: optionItem): number {
        return item.id;
    }
}
