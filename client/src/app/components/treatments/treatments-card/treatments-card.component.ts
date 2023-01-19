import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-treatments-card',
  templateUrl: './treatments-card.component.html',
  styleUrls: ['./treatments-card.component.css']
})
export class TreatmentsCardComponent implements AfterViewInit {

  constructor() { }
  @Input() photoName: string;

  @ViewChild('cardfront', {static: false}) cardF: ElementRef;
  @ViewChild('cardback', {static: false}) cardB: ElementRef;
  @ViewChild('cardPhoto', {static: false}) cardPhoto: ElementRef;

  ngAfterViewInit(): void {
    this.cardPhoto.nativeElement.style = `background-image: linear-gradient(to left top, var(--main-bk-color-dark-5), var(--main-bk-color-dark-2)), url("../../../../assets/${this.photoName}")`;
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
