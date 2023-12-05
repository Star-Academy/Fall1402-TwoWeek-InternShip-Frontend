import {Component, Input} from '@angular/core';
import {popularGameItem} from "../../modules/popular-game";

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
}
