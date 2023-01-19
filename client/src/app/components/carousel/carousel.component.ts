import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

private swipeCoord?: [number, number];
private swipeTime?: number;
swipeId = new EventEmitter<number>();

swipe(e: TouchEvent, when: string): void {
  const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
  const time = new Date().getTime();

  if (when === 'start') {
    this.swipeCoord = coord;
    this.swipeTime = time;
  } else if (when === 'end') {
    const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
    const duration = time - this.swipeTime;

    if (duration < 1000 
      && Math.abs(direction[0]) > 30 
      && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { 
        const swipeDirection = direction[0] < 0 ? 1 : -1;
        this.swipeId.emit(swipeDirection);
    }
  }
}

  ngOnInit(): void {}
}
