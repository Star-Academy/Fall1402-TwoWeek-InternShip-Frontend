import {Component, Input} from '@angular/core';
import {menuItem} from "../models/footer-menu";

@Component({
    selector: 'app-footer-menu',
    templateUrl: './footer-menu.component.html',
    styleUrl: './footer-menu.component.scss'
})
export class FooterMenuComponent {
    @Input() public items: menuItem[] = [];

    public identify(index: number, item: menuItem): number {
        return item.id;
    }
}
