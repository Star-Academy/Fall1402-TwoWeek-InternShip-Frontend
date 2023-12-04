import {Component, Input} from '@angular/core';

interface IPhoneItem {
    id: number,
    phone: string,
}

@Component({
    selector: 'app-footer-phone',
    templateUrl: './footer-phone.component.html',
    styleUrl: './footer-phone.component.scss'
})
export class FooterPhoneComponent {
    @Input() items: IPhoneItem[] = [];

    identify(index: number, item: IPhoneItem): number {
        return item.id;
    }
}
