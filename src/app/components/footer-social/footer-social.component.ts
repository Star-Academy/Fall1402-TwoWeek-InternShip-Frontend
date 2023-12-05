import {Component, Input} from '@angular/core';
import {socialMediaItem} from "../models/footer-social-media";

@Component({
    selector: 'app-footer-social',
    templateUrl: './footer-social.component.html',
    styleUrl: './footer-social.component.scss'
})
export class FooterSocialComponent {
    @Input() public items: socialMediaItem[] = [];

    public identify(index: number, item: socialMediaItem): number {
        return item.id;
    };
}
