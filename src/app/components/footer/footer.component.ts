import {Component} from '@angular/core';
import {menuItem} from "../modules/footer-menu";
import {socialMediaItem} from "../modules/footer-social-media";
import {phoneItem} from "../modules/footer-phone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public menu: menuItem[] = [
    {id: 0, link: "/", text: "صفحه اصلی"},
    {id: 1, link: "/product", text: "محصولات"},
    {id: 2, link: "/privacy", text: "مقررات"},
    {id: 3, link: "/contact-us", text: "تماس با ما"},
  ];

  public socialMedia: socialMediaItem[] = [
    {id: 0, link: "#", icon: "fa-brands fa-youtube"},
    {id: 1, link: "#", icon: "fa-brands fa-twitter"},
    {id: 2, link: "#", icon: "fa-brands fa-discord"},
    {id: 3, link: "#", icon: "fa-brands fa-facebook"}
  ];

  public phones: phoneItem[] = [
    {id: 0, phone: "09547856957"},
    {id: 1, phone: "09684523697"}
  ];
}
