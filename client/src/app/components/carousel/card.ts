export interface Card {
  id: number;
  image: string;
  header: string;
  description: string;
  price: string;
}

export interface Swipe{
  card: Card;
  directionName: string;
}
