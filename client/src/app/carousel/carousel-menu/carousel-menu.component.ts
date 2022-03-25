import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { Card } from '../card';
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
  ];

  counter: number = 1;
  carousel: Subscription;

  constructor(private switcher: SwitcherService) {}

  ngOnInit(): void {
    this.switcher.switch(this.cards[0]);
    this.carousel = interval(5000).subscribe((x) => {
      this.switcher.switch(this.cards[this.counter]);
      if (this.counter >= 1) this.counter = 0;
      else this.counter++;
    });
  }

  Switch(id: number) {
    this.switcher.switch(this.cards[id]);
    this.carousel.unsubscribe();
  }
}
