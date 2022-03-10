import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public hero =
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spa-woman-female-enjoying-massage-in-spa-centre-royalty-free-image-492676582-1549988720.jpg';

  constructor() {}

  ngOnInit(): void {}
}
