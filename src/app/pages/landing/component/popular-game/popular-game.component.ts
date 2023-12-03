import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-popular-game',
  templateUrl: './popular-game.component.html',
  styleUrl: './popular-game.component.scss'
})
export class PopularGameComponent {
  @Input() items: { image: string, title: string, description: string, link: string }[] = [];
}
