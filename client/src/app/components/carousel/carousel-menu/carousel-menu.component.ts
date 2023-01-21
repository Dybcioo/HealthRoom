import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Card, Swipe } from '../card';
import { SwitcherService } from '../switcher.service';

@Component({
  selector: 'app-carousel-menu',
  templateUrl: './carousel-menu.component.html',
  styleUrls: ['./carousel-menu.component.css'],
})
export class CarouselMenuComponent implements OnInit {
  cards: Card[] = [
    {
      id: 0,
      image:
        '../../../../assets/bowtech-vertical.jpeg',
      description: `Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over 2000 years old. Richard McClintock,
    a Latin professor at Hampden-Sydney College in Virginia,
     looked up one of the more obscure Latin words, consectetur,
     from a Lorem Ipsum passage, and going through the cites of the word in
     classical literature, discovered the undoubtable source.`,
     header: 'Bowen',
     price: '200zł'
    },
    {
      id: 1,
      image:
        '../../../../assets/rejuvence-vertical.jpeg',
      description: `Elooo`,
      header: 'Bowen',
      price: '200zł'
    },
    {
      id: 2,
      image:
        '../../../../assets/zoga-face-vertical.jpeg',
      description: `Elooo`,
      header: 'Bowen',
      price: '200zł'
    },
    {
      id: 3,
      image:
        '../../../../assets/facemodeling-vertical.jpeg',
      description: `Elooo`,
      header: 'Bowen',
      price: '200zł'
    },
    {
      id: 4,
      image:
        '../../../../assets/kobido-vertical.jpeg',
      description: `Elooo`,
      header: 'Bowen',
      price: '200zł'
    },
    {
      id: 5,
      image:
        '../../../../assets/reflexology-vertical.jpeg',
      description: `Elooo`,
      header: 'Bowen',
      price: '200zł'
    },
    {
      id: 6,
      image:
        '../../../../assets/reflexology-feet-vertical.jpeg',
      description: `Elooo`,
      header: 'Bowen',
      price: '200zł'
    },
    {
      id: 7,
      image:
        '../../../../assets/ear-kandle-vertical.jpeg',
      description: `Elooo`,
      header: 'Bowen',
      price: '200zł'
    },
    {
      id: 8,
      image:
        '../../../../assets/total-biology-vertical.jpeg',
      description: `Elooo`,
      header: 'Bowen',
      price: '200zł'
    },
  ];

  @Input() swipe: EventEmitter<number>;
  counter: number = 0;
  carousel: Subscription;
  swipeModel: Swipe;

  constructor(private switcher: SwitcherService) {}

  ngOnInit(): void {
    this.swipeModel = {card: this.cards[0], directionName: 'right'};
    this.switcher.switch(this.swipeModel);
    this.carousel = interval(10000).subscribe((x) => {
      if (this.counter >= 10) this.counter = 0;
      else this.counter++;
      this.swipeModel.card = this.cards[this.counter];
      this.switcher.switch(this.swipeModel);
    });

    this.swipe.subscribe(swipeId => {
      if(swipeId > 0){
        this.swipeModel.directionName = 'right'
      }else{
        this.swipeModel.directionName = 'left'
      }
      this.Switch(this.counter + swipeId);
    })
  }

  Switch(id: number) {
    this.counter = id;
    if (this.counter >= 10) this.counter = 0;
    if (this.counter < 0) this.counter = 10;
    this.swipeModel.card = this.cards[this.counter];
    this.switcher.switch(this.swipeModel);
    this.carousel.unsubscribe();
  }
}
