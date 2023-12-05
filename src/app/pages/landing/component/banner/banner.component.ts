import {Component} from '@angular/core';
import {optionItem} from "../../modules/banner-option";
import {buttonItem} from "../../modules/banner-button";
import {faTruckRampBox, faComment, faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  public options: optionItem[] = [
    {id: 0, icon: faTruckRampBox, title: "تحویل آنی", description: "نیاز نیست صبر کنی!"},
    {id: 1, icon: faComment, title: "پشتیبانی", description: "پاسخگویی ۲۴ ساعته"},
    {id: 2, icon: faStar, title: "رضایت مشتریان", description: "اولویت ما رضایت مشتریانمان است"},
  ];

  public buttons: buttonItem[] = [
    {style: "gradient-background", text: "خرید آیتم های بازی", link: "/shop"},
    {style: "", text: "دیگر خریدها", link: "/shop"},
  ];
}
