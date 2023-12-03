import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
 option : {icon: string, title: string, description: string}[] = [
   {icon: 'fa-solid fa-truck-ramp-box', title: 'تحویل آنی', description: 'نیاز نیست صبر کنی!'},
   {icon: 'fa-solid fa-comments', title: 'پشتیبانی', description: 'پاسخگویی ۲۴ ساعته'},
   {icon: 'fa-solid fa-star', title: 'رضایت مشتریان', description: 'اولویت ما رضایت مشتریانمان است'}
 ];

 button: {style: string, text: string, link: string}[] = [
   {style: 'gradient-background', text: 'خرید آیتم های بازی', link: '/shop'},
   {style: '', text: 'دیگر خریدها', link: '/shop'}
 ];
}
