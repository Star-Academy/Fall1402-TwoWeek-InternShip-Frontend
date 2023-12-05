import {Component} from '@angular/core';
import {menuItem} from "../modules/header-upper-menu";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper-header.component.html',
  styleUrl: './upper-header.component.scss'
})
export class UpperHeaderComponent {
  public menu: menuItem[] = [
    {id: 0, name: "خانه", link: "/", active: true},
    {id: 1, name: "محصولات", link: "/product", active: false},
    {id: 2, name: "درباره ما", link: "/about-us", active: false},
    {id: 3, name: "تماس با ما", link: "/contact-us", active: false},
  ];

  public identify(index: number, item: menuItem): number {
    return item.id;
  }

  public faCartShopping = faCartShopping;

  public faUser = faUser;

  public myClass(item : menuItem): string{
    return item.active ? 'active' : '';
  }
}
