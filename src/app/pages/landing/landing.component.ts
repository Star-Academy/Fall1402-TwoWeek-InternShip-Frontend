import {Component} from '@angular/core';
import {menuItem} from "../../components/modules/header-lower-menu";
import {popularGameItem} from "./modules/popular-game";
import {offerGameItem} from "./modules/offer-game";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  public menu: menuItem[] = [
    {id: 0, name: "بازی ها", active: false},
    {id: 1, name: "انواع کیفیت کارت ها", active: true},
    {id: 2, name: "خدمات", active: false},
    {id: 3, name: "درون بازی ای", active: false},
    {id: 4, name: "سوالات متداول", active: false},
  ];

  public popularGame: popularGameItem[] = [
    {id: 0, image: "/assets/images/pubg.webp", title: "بازی پابجی موبایل", description: "Buy pubg mobile", link: "/"},
    {id: 1, image: "/assets/images/pubg.webp", title: "بازی پابجی موبایل", description: "Buy pubg mobile", link: "/"},
    {id: 2, image: "/assets/images/pubg.webp", title: "بازی پابجی موبایل", description: "Buy pubg mobile", link: "/"},
    {id: 3, image: "/assets/images/pubg.webp", title: "بازی پابجی موبایل", description: "Buy pubg mobile", link: "/"},
    {id: 4, image: "/assets/images/pubg.webp", title: "بازی پابجی موبایل", description: "Buy pubg mobile", link: "/"},
  ];

  public offerGame: offerGameItem[] = [
    {
      id: 0,
      image: "/assets/images/callofduty.webp",
      title: "خرید پی آر کال آف دیوتی",
      description: "buy cp game call of duty mobile",
      oldPrice: "2,500,000",
      price: "2,000,000"
    },
    {
      id: 1,
      image: "/assets/images/callofduty.webp",
      title: "خرید پی آر کال آف دیوتی",
      description: "buy cp game call of duty mobile",
      oldPrice: "2,500,000",
      price: "2,000,000"
    },
    {
      id: 2,
      image: "/assets/images/callofduty.webp",
      title: "خرید پی آر کال آف دیوتی",
      description: "buy cp game call of duty mobile",
      oldPrice: "2,500,000",
      price: "2,000,000"
    },
    {
      id: 3,
      image: "/assets/images/callofduty.webp",
      title: "خرید پی آر کال آف دیوتی",
      description: "buy cp game call of duty mobile",
      oldPrice: "2,500,000",
      price: "2,000,000"
    },
  ];
}
