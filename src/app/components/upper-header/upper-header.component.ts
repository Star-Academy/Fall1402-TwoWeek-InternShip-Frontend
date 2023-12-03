import {Component} from '@angular/core';

@Component({
    selector: 'app-upper-header',
    templateUrl: './upper-header.component.html',
    styleUrl: './upper-header.component.scss'
})
export class UpperHeaderComponent {
    menu: { id: number, name: string, link: string, active: boolean }[] = [
        {id: 0, name: "خانه", link: "/", active: true},
        {id: 1, name: "محصولات", link: "/product", active: false},
        {id: 2, name: "درباره ما", link: "/about-us", active: false},
        {id: 3, name: "تماس با ما", link: "/contact-us", active: false}
    ];

    identify(index: number, item: { id: number, name: string, link: string, active: boolean }): number {
        return item.id;
    }
}
