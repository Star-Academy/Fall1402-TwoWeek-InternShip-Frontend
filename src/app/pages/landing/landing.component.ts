import {Component} from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent {
    menu: { name: string, active: boolean }[] = [
        {name: "بازی ها", active: false},
        {name: "انواع کیفیت کارت ها", active: true},
        {name: "خدمات", active: false},
        {name: "درون بازی ای", active: false},
        {name: "سوالات متداول", active: false}
    ]
}
