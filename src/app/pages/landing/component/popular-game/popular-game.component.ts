import {Component, Input} from '@angular/core';
import {popularGameItem} from "../../models/popular-game";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-popular-game',
  templateUrl: './popular-game.component.html',
  styleUrl: './popular-game.component.scss'
})

export class PopularGameComponent {
  @Input() public items: popularGameItem[] = [];

  public identify(index: number, item: popularGameItem): number {
    return item.id;
  }

  public faArrowLeft = faArrowLeft;

  public faArrowRight = faArrowRight;
}
