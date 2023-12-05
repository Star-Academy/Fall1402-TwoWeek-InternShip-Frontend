import {Component, Input} from '@angular/core';
import {buttonItem} from "../../modules/banner-button";

@Component({
    selector: 'app-banner-button',
    templateUrl: './banner-button.component.html',
    styleUrl: './banner-button.component.scss'
})
export class BannerButtonComponent {
    @Input() public item: buttonItem = {
        link: "",
        style: "",
        text: ""
    };
}
