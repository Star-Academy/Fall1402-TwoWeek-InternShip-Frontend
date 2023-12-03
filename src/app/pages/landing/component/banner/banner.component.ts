import {Component} from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {
    option: { id: number, icon: string, title: string, description: string }[] = [
        {id: 0, icon: 'fa-solid fa-truck-ramp-box', title: 'تحویل آنی', description: 'نیاز نیست صبر کنی!'},
        {id: 1, icon: 'fa-solid fa-comments', title: 'پشتیبانی', description: 'پاسخگویی ۲۴ ساعته'},
        {id: 2, icon: 'fa-solid fa-star', title: 'رضایت مشتریان', description: 'اولویت ما رضایت مشتریانمان است'}
    ];

    button: { style: string, text: string, link: string }[] = [
        {style: 'gradient-background', text: 'خرید آیتم های بازی', link: '/shop'},
        {style: '', text: 'دیگر خریدها', link: '/shop'}
    ];
}
