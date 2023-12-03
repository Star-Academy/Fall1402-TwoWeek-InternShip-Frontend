import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-popular-game',
    templateUrl: './popular-game.component.html',
    styleUrl: './popular-game.component.scss'
})

export class PopularGameComponent {
    @Input() items: { id: number, image: string, title: string, description: string, link: string }[] = [];

    identify(index: number, item: { id: number, image: string, title: string, description: string, link: string }): number {
        return item.id;
    }
}
