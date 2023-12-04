import {Component, Input} from '@angular/core';

interface IMenuItem {
    id: number,
    link: string,
    text: string,
}

@Component({
    selector: 'app-footer-menu',
    templateUrl: './footer-menu.component.html',
    styleUrl: './footer-menu.component.scss'
})
export class FooterMenuComponent {
    @Input() items: IMenuItem[] = [];

    identify(index: number, item: IMenuItem): number {
        return item.id;
    }
}
