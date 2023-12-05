import {Component, Input} from '@angular/core';
import {phoneItem} from "../modules/footer-phone";

@Component({
    selector: 'app-footer-phone',
    templateUrl: './footer-phone.component.html',
    styleUrl: './footer-phone.component.scss'
})
export class FooterPhoneComponent {
    @Input() public items: phoneItem[] = [];

    public identify(index: number, item: phoneItem): number {
        return item.id;
    }
}
