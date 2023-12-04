import {Component, Input} from '@angular/core';

interface buttonItemInterface {
    style: string,
    text: string,
    link: string,
}

@Component({
    selector: 'app-banner-button',
    templateUrl: './banner-button.component.html',
    styleUrl: './banner-button.component.scss'
})
export class BannerButtonComponent {
    @Input() item: buttonItemInterface = new class implements buttonItemInterface {
        link: string = "";
        style: string = "";
        text: string = "";
    };
}
