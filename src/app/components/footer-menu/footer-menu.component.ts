import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-footer-menu',
    templateUrl: './footer-menu.component.html',
    styleUrl: './footer-menu.component.scss'
})
export class FooterMenuComponent {
    @Input() items: { id: number, link: string, text: string }[] = [];

    identify(index: number, item: { id: number, link: string, text: string }): number {
        return item.id;
    }
}
