import {Component} from '@angular/core';

interface IMenuItem {
    id: number,
    link: string,
    text: string,
}

interface ISocialMediaItem {
    id: number,
    link: string,
    icon: string,
}

interface IPhoneItem {
    id: number,
    phone: string,
}

class menuItem implements IMenuItem {
    id: number = 0;
    link: string = "";
    text: string = "";

    constructor(id: number, link: string, text: string) {
        this.id = id;
        this.link = link;
        this.text = text;
    }
}

class socialMediaItem implements ISocialMediaItem {
    id: number = 0;
    link: string = "";
    icon: string = "";

    constructor(id: number, link: string, icon: string) {
        this.id = id;
        this.link = link;
        this.icon = icon;
    }
}

class phoneItem implements IPhoneItem {
    id: number = 0;
    phone: string = "";

    constructor(id: number, phone: string) {
        this.id = id;
        this.phone = phone;
    }

}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    menu: menuItem[] = [
        new menuItem(0, "/", "صفحه اصلی"),
        new menuItem(1, "/product", "محصولات"),
        new menuItem(2, "/privacy", "مقررات"),
        new menuItem(3, "/contact-us", "تماس با ما"),
    ];

    socialMedia: socialMediaItem[] = [
        new socialMediaItem(0, "#", "fa-brands fa-youtube"),
        new socialMediaItem(1, "#", "fa-brands fa-twitter"),
        new socialMediaItem(2, "#", "fa-brands fa-discord"),
        new socialMediaItem(3, "#", "fa-brands fa-facebook")
    ];

    phones: phoneItem[] = [
        new phoneItem(0, "09547856957"),
        new phoneItem(1, "09684523697")
    ];
}
