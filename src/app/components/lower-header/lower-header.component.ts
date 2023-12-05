import {Component, Input} from '@angular/core';
import {menuItem} from "../modules/header-lower-menu";

@Component({
    selector: 'app-lower-header',
    templateUrl: './lower-header.component.html',
    styleUrl: './lower-header.component.scss'
})
export class LowerHeaderComponent {
    @Input() public menu: menuItem[] = [];

    public identify(index: number, item: menuItem): number {
        return item.id;
    };
}
