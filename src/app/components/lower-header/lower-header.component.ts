import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-lower-header',
    templateUrl: './lower-header.component.html',
    styleUrl: './lower-header.component.scss'
})
export class LowerHeaderComponent {
    @Input() public menu: { id: number, name: string, active: boolean }[] = [];

    identify(index: number, item: { id: number, name: string, active: boolean }): number {
        return item.id;
    };
}
