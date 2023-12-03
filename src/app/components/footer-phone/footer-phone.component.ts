import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-footer-phone',
    templateUrl: './footer-phone.component.html',
    styleUrl: './footer-phone.component.scss'
})
export class FooterPhoneComponent {
    @Input() items: { id: number, phone: string }[] = [];

    identify(index: number, item: { id: number, phone: string }): number {
        return item.id;
    }
}
