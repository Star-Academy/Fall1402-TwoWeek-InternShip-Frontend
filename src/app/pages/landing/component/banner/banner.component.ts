import {Component} from '@angular/core';

interface optionItemInterface {
    id: number,
    icon: string,
    title: string,
    description: string,
}

interface buttonItemInterface{
    style: string,
    text: string,
    link: string,
}

class optionItem implements  optionItemInterface{
    id: number = 0;
    icon: string = "";
    title: string = "";
    description: string = "";

    constructor(id : number, icon:string,title: string, description: string) {
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.description = description;
    }
}

class buttonItem implements  buttonItemInterface{
    style: string = "";
    text: string = "";
    link: string = "";

    constructor(style: string, text: string, link: string) {
        this.style = style;
        this.text = text;
        this.link = link;
    }
}

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {
    options: optionItem[] = [
        new optionItem(0, "fa-solid fa-truck-ramp-box", "تحویل آنی", "نیاز نیست صبر کنی!"),
        new optionItem(1, "fa-solid fa-comments", "پشتیبانی", "پاسخگویی ۲۴ ساعته"),
        new optionItem(2, "fa-solid fa-star", "رضایت مشتریان", "اولویت ما رضایت مشتریانمان است"),
    ];

    buttons: buttonItem[] = [
        new buttonItem("gradient-background", "خرید آیتم های بازی", "/shop"),
        new buttonItem("", "دیگر خریدها", "/shop"),
    ];
}
