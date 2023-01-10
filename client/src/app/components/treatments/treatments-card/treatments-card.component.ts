import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-treatments-card',
  templateUrl: './treatments-card.component.html',
  styleUrls: ['./treatments-card.component.css']
})
export class TreatmentsCardComponent implements OnInit {

  constructor() { }

  @ViewChild('cardfront', {static: false}) cardF: ElementRef;
  @ViewChild('cardback', {static: false}) cardB: ElementRef;

  ngOnInit(): void {
  }

  transform: boolean = true;

  rotate() {
    if(this.transform){
      this.cardF.nativeElement.style.transform = 'rotateY(180deg)';
      this.cardB.nativeElement.style.transform = 'rotateY(0)';
    }else{
      this.cardF.nativeElement.style.transform = 'rotateY(0)';
      this.cardB.nativeElement.style.transform = 'rotateY(-180deg)';
    }
    this.transform = !this.transform;
    
  }

}
