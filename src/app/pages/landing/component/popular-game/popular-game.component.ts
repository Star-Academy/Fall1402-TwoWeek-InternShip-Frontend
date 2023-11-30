import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-game',
  templateUrl: './popular-game.component.html',
  styleUrl: './popular-game.component.css'
})
export class PopularGameComponent {
  @Input() items!: {image: string, title: string, description: string}[];
}
