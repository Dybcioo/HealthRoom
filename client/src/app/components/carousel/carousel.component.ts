import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { SwitcherService } from './switcher.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}
  description2 = 'elo';

  ngOnInit(): void {}
}
