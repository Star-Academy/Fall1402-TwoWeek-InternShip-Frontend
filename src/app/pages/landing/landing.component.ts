import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  menu: { name: string, active: boolean }[] = [
    {name: "بازی ها", active: false},
    {name: "انواع کیفیت کارت ها", active: true},
    {name: "خدمات", active: false},
    {name: "درون بازی ای", active: false},
    {name: "سوالات متداول", active: false}
  ];

  popularGame : {image: string, title: string, description: string, link: string}[] = [
    {image: './assets/images/pubg.webp', title:'بازی پابجی موبایل', description: 'Buy pubg mobile', link: '/'},
    {image: './assets/images/pubg.webp', title:'بازی پابجی موبایل', description: 'Buy pubg mobile', link: '/'},
    {image: './assets/images/pubg.webp', title:'بازی پابجی موبایل', description: 'Buy pubg mobile', link: '/'},
    {image: './assets/images/pubg.webp', title:'بازی پابجی موبایل', description: 'Buy pubg mobile', link: '/'},
    {image: './assets/images/pubg.webp', title:'بازی پابجی موبایل', description: 'Buy pubg mobile', link: '/'}
  ];

  offerGame : {image: string, title: string, description: string, oldPrice: string, price: string}[] = [
    {image: './assets/images/callofduty.webp', title: 'خرید پی آر کال آف دیوتی', description: 'buy cp game call of duty mobile', oldPrice: '2,500,000', price: '2,000,000'},
    {image: './assets/images/callofduty.webp', title: 'خرید پی آر کال آف دیوتی', description: 'buy cp game call of duty mobile', oldPrice: '2,500,000', price: '2,000,000'},
    {image: './assets/images/callofduty.webp', title: 'خرید پی آر کال آف دیوتی', description: 'buy cp game call of duty mobile', oldPrice: '2,500,000', price: '2,000,000'},
    {image: './assets/images/callofduty.webp', title: 'خرید پی آر کال آف دیوتی', description: 'buy cp game call of duty mobile', oldPrice: '2,500,000', price: '2,000,000'}
  ];
}
