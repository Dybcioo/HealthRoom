import { EventEmitter, Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root',
})
export class SwitcherService {
  activeCard = new EventEmitter<Card>();

  constructor() {}

  switch(card: Card) {
    this.activeCard.emit(card);
  }
}
