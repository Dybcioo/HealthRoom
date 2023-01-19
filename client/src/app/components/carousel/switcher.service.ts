import { EventEmitter, Injectable } from '@angular/core';
import { Card, Swipe } from './card';

@Injectable({
  providedIn: 'root',
})
export class SwitcherService {
  activeCard = new EventEmitter<Swipe>();

  constructor() {}

  switch(swipe: Swipe) {
    this.activeCard.emit(swipe);
  }
}
