import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrl: './lower-header.component.scss'
})
export class LowerHeaderComponent {
  @Input() public menu: { name: string, active: boolean }[] = [];
}
