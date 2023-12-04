import {Component, Input} from '@angular/core';

interface popularGameItemInterface {
    id: number,
    image: string,
    title: string,
    description: string,
    link: string,
}

@Component({
    selector: 'app-popular-game',
    templateUrl: './popular-game.component.html',
    styleUrl: './popular-game.component.scss'
})

export class PopularGameComponent {
    @Input() items: popularGameItemInterface[] = [];

    identify(index: number, item: popularGameItemInterface): number {
        return item.id;
    }
}
