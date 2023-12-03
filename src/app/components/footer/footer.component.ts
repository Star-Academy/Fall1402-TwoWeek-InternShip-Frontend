import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    menu: { id: number, link: string, text: string }[] = [
        {id: 0, link: '/', text: 'صفحه اصلی'},
        {id: 1, link: '/product', text: 'محصولات'},
        {id: 2, link: '/privacy', text: 'قوانین و مقررات'},
        {id: 3, link: '/contact-us', text: 'تماس با ما'}
    ];

    socialMedia: { id: number, link: string, icon: string }[] = [
        {id: 0, link: '#', icon: 'fa-brands fa-youtube'},
        {id: 1, link: '#', icon: 'fa-brands fa-twitter'},
        {id: 2, link: '#', icon: 'fa-brands fa-discord'},
        {id: 3, link: '#', icon: 'fa-brands fa-facebook'},
    ];

    phone: { id: number, phone: string }[] = [
        {id: 0, phone: '09547856957'},
        {id: 1, phone: '09684523697'}
    ];
}
