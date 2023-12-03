import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-banner-item',
    templateUrl: './banner-item.component.html',
    styleUrl: './banner-item.component.scss'
})
export class BannerItemComponent {
    @Input() items: { id: number, icon: string, title: string, description: string }[] = [];

    identify(index: number, item: { id: number, icon: string, title: string, description: string }): number {
        return item.id;
    }
}
