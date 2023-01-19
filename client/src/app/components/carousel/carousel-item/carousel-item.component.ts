import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Card, Swipe } from '../card';
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
        'center',
        style({
          transform: 'translate(0%)',
          opacity: '1',
        })
      ),
      state(
        'left',
        style({
          transform: 'translate(100%)',
          opacity: '0',
        })
      ),
      transition('center => right', animate('600ms ease')),
      transition('* => center', animate('1000ms ease')),
      transition('center => left', animate('600ms ease')),
    ]),
  ],
})
export class CarouselItemComponent implements OnInit{
  card: Card;
  position: string;
  cardTemp: Card;

  constructor(private switcher: SwitcherService) {
    this.switcher.activeCard.subscribe((swipe: Swipe) => {
      this.position = swipe.directionName;
      this.cardTemp = swipe.card;
    });
  }

  ngOnInit(): void {}

  onDone($event) {
    this.card = this.cardTemp;
    this.position = 'center';
  }
}
