import {Component, Input} from '@angular/core';

interface IMenuItem {
    id: number,
    name: string,
    active: boolean,
}

@Component({
    selector: 'app-lower-header',
    templateUrl: './lower-header.component.html',
    styleUrl: './lower-header.component.scss'
})
export class LowerHeaderComponent {
    @Input() public menu: IMenuItem[] = [];

    identify(index: number, item: IMenuItem): number {
        return item.id;
    };
}
