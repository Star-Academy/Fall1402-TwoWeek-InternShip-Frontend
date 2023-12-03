import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-footer-social',
    templateUrl: './footer-social.component.html',
    styleUrl: './footer-social.component.scss'
})
export class FooterSocialComponent {
    @Input() items: { id: number, link: string, icon: string }[] = [];

    identify(index: number, item: { id: number, link: string, icon: string }): number {
        return item.id;
    };
}
