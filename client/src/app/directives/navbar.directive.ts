import { Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {


  constructor(private elementRef: ElementRef,
    private renderer2: Renderer2) { 
      
  }

  get invisibleHeight(){
    return document.getElementById("navInvisible").offsetHeight;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if(window.pageYOffset >= this.invisibleHeight){
      this.renderer2.setAttribute(this.elementRef.nativeElement, "class", "sticky");
    }else{
      this.renderer2.setAttribute(this.elementRef.nativeElement, "class", "header");
    }
  } 

}
