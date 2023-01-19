export interface Card {
  id: number;
  image: string;
  description: string;
}

export interface Swipe{
  card: Card;
  directionName: string;
}
