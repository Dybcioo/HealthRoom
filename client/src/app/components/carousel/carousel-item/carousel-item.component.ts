import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';
import { SwitcherService } from '../switcher.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css'],
  animations: [
    trigger('photoState', [
      state(
        'right',
        style({
          transform: 'translate(-100%)',
          opacity: '0',
        })
      ),
      state(
        'left',
        style({
          transform: 'translate(0%)',
          opacity: '1',
        })
      ),
      transition('* => right', animate('1300ms ease')),
      transition('* => left', animate('2000ms ease')),
    ]),
  ],
})
export class CarouselItemComponent implements OnInit {
  card: Card;
  position: string;
  cardTemp: Card;

  constructor(private switcher: SwitcherService) {
    this.switcher.activeCard.subscribe((card: Card) => {
      this.position = 'right';
      this.cardTemp = card;
    });
  }

  ngOnInit(): void {}

  onDone($event) {
    this.card = this.cardTemp;
    this.position = 'left';
  }
}
