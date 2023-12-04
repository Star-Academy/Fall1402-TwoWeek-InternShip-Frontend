import {Component} from '@angular/core';

interface IMenuItem {
    id: number,
    name: string,
    active: boolean,
}

interface IPopularGameItem {
    id: number,
    image: string,
    title: string,
    description: string,
    link: string,
}

interface IOfferGameItem {
    id: number,
    image: string,
    title: string,
    description: string,
    oldPrice: string,
    price: string,
}

class menuItem implements IMenuItem {
    id: number = 0;
    name: string = "";
    active: boolean = false;

    constructor(id: number, name: string, active: boolean) {
        this.id = id;
        this.name = name;
        this.active = active;
    }
}

class popularGameItem implements IPopularGameItem {
    id: number = 0;
    image: string = "";
    title: string = "";
    description: string = "";
    link: string = "";

    constructor(id: number, image: string, title: string, description: string, link: string) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = description;
        this.link = link;
    }
}

class offerGameItem implements IOfferGameItem {
    id: number = 0;
    image: string = "";
    title: string = "";
    description: string = "";
    oldPrice: string = "";
    price: string = "";

    constructor(id: number, image: string, title: string, description: string, oldPrice: string, price: string) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = description;
        this.oldPrice = oldPrice;
        this.price = price;
    }
}

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent {
    menu: menuItem[] = [
        new menuItem(0, "بازی ها", false),
        new menuItem(1, "انواع کیفیت کارت ها", true),
        new menuItem(2, "خدمات", false),
        new menuItem(3, "درون بازی ای", false),
        new menuItem(4, "سوالات متداول", false),
    ];

    popularGame: popularGameItem[] = [
        new popularGameItem(0, "/assets/images/pubg.webp", "بازی پابجی موبایل", "Buy pubg mobile", "/"),
        new popularGameItem(1, "/assets/images/pubg.webp", "بازی پابجی موبایل", "Buy pubg mobile", "/"),
        new popularGameItem(2, "/assets/images/pubg.webp", "بازی پابجی موبایل", "Buy pubg mobile", "/"),
        new popularGameItem(3, "/assets/images/pubg.webp", "بازی پابجی موبایل", "Buy pubg mobile", "/"),
        new popularGameItem(4, "/assets/images/pubg.webp", "بازی پابجی موبایل", "Buy pubg mobile", "/"),
    ];

    offerGame: offerGameItem[] = [
        new offerGameItem(0, "/assets/images/callofduty.webp", "خرید پی آر کال آف دیوتی", "buy cp game call of duty mobile", "2,500,000", "2,000,000"),
        new offerGameItem(1, "/assets/images/callofduty.webp", "خرید پی آر کال آف دیوتی", "buy cp game call of duty mobile", "2,500,000", "2,000,000"),
        new offerGameItem(2, "/assets/images/callofduty.webp", "خرید پی آر کال آف دیوتی", "buy cp game call of duty mobile", "2,500,000", "2,000,000"),
        new offerGameItem(3, "/assets/images/callofduty.webp", "خرید پی آر کال آف دیوتی", "buy cp game call of duty mobile", "2,500,000", "2,000,000"),
    ];
}
