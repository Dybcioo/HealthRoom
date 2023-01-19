import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  constructor() { }

  photo1: string;
  photo2: string;
  photo3: string;


  ngOnInit(): void {
    this.photo1 = "bowtech.jpg";
    this.photo2 = "rejuvence.jpg";
    this.photo3 = "zoga-face.jpg";
  }

}
