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
        'https://media.istockphoto.com/photos/beautiful-woman-enjoying-head-massage-in-spa-picture-id1168908791?k=20&m=1168908791&s=612x612&w=0&h=5WNkwhMr-W1BVyyYi64EtjBudDyZmfgj2SZEwk2Lyow=',
      description: `Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over 2000 years old. Richard McClintock,
    a Latin professor at Hampden-Sydney College in Virginia,
     looked up one of the more obscure Latin words, consectetur,
     from a Lorem Ipsum passage, and going through the cites of the word in
     classical literature, discovered the undoubtable source.`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/small-dog-of-pug-breed-in-her-physiotherapy-session-physiotherapy-for-picture-id1324266775?k=20&m=1324266775&s=612x612&w=0&h=xR9ygjFtl9D7FWvj0GUWhDjYr3uUTgePl16aRmPsLQA=',
      description: `Elooo`,
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
