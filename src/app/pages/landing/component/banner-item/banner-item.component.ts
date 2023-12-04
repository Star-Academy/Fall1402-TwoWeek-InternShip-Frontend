import {Component, Input} from '@angular/core';

interface optionItemInterface {
    id: number,
    icon: string,
    title: string,
    description: string,
}

@Component({
    selector: 'app-banner-item',
    templateUrl: './banner-item.component.html',
    styleUrl: './banner-item.component.scss'
})
export class BannerItemComponent {
    @Input() items: optionItemInterface[] = [];

    identify(index: number, item: optionItemInterface): number {
        return item.id;
    }
}
