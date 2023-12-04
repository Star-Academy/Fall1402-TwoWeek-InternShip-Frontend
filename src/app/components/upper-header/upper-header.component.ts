import {Component} from '@angular/core';

interface IMenuItem {
    id: number,
    name: string,
    link: string,
    active: boolean,
}

class menuItem implements IMenuItem {
    id: number = 0;
    name: string = "";
    link: string = "";
    active: boolean = false;

    constructor(id: number, name: string, link: string, active: boolean) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.active = active;
    }
}

@Component({
    selector: 'app-upper-header',
    templateUrl: './upper-header.component.html',
    styleUrl: './upper-header.component.scss'
})
export class UpperHeaderComponent {
    menu: menuItem[] = [
        new menuItem(0, "خانه", "/", true),
        new menuItem(1, "محصولات", "/product", false),
        new menuItem(2, "درباره ما", "/about-us", false),
        new menuItem(3, "تماس با ما", "/contact-us", false),
    ];

    identify(index: number, item: menuItem): number {
        return item.id;
    }
}
