import {Component, Input} from '@angular/core';

interface ISocialMediaItem {
    id: number,
    link: string,
    icon: string,
}

@Component({
    selector: 'app-footer-social',
    templateUrl: './footer-social.component.html',
    styleUrl: './footer-social.component.scss'
})
export class FooterSocialComponent {
    @Input() items: ISocialMediaItem[] = [];

    identify(index: number, item: ISocialMediaItem): number {
        return item.id;
    };
}
