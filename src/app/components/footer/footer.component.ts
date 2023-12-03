import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menu: { link: string, text: string }[] = [
    {link: '/', text: 'صفحه اصلی'},
    {link: '/product', text: 'محصولات'},
    {link: '/privacy', text: 'قوانین و مقررات'},
    {link: '/contact-us', text: 'تماس با ما'}
  ];

  socialMedia: { link: string, icon: string }[] = [
    {link: '#', icon: 'fa-brands fa-youtube'},
    {link: '#', icon: 'fa-brands fa-twitter'},
    {link: '#', icon: 'fa-brands fa-discord'},
    {link: '#', icon: 'fa-brands fa-facebook'},
  ];

  phone: string[] = ['09547856957', '09684523697'];
}
