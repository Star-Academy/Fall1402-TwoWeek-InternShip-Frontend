import {Component} from '@angular/core';
import {menuItem} from "../models/footer-menu";
import {socialMediaItem} from "../models/footer-social-media";
import {phoneItem} from "../models/footer-phone";
import {faYoutube, faFacebook, faTwitter, faDiscord} from "@fortawesome/free-brands-svg-icons";

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
    {id: 0, link: "#", icon: faFacebook},
    {id: 1, link: "#", icon: faTwitter},
    {id: 2, link: "#", icon: faDiscord},
    {id: 3, link: "#", icon: faYoutube},
  ];

  public phones: phoneItem[] = [
    {id: 0, phone: "09547856957"},
    {id: 1, phone: "09684523697"}
  ];
}
