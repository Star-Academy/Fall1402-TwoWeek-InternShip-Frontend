import {Component, Input} from '@angular/core';
import {menuItem} from "../models/header-lower-menu";
import {faMagnifyingGlass, faFilter, faChevronDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrl: './lower-header.component.scss'
})
export class LowerHeaderComponent {
  @Input() public menu: menuItem[] = [];

  public identify(index: number, item: menuItem): number {
    return item.id;
  };

  public faFilter = faFilter;

  public faMagnifyingGlass = faMagnifyingGlass;

  public faChevronDown = faChevronDown;
  public myClass(item : menuItem): string{
    return item.active ? 'active' : '';
  }
}
