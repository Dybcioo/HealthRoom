import { animate, AnimationBuilder, AnimationMetadata, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {

  constructor(private elementRef: ElementRef,
    private renderer2: Renderer2,
    private builder: AnimationBuilder) {}

  get invisibleHeight(){
    return document.getElementById("navInvisible").offsetHeight - 5;
  }

  get logo(){
    return document.getElementById("logo");
  }

  get btnMobile(){
    return document.getElementById("btn-mobile-nav");
  }

  flag = true;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if(window.pageYOffset >= this.invisibleHeight && this.flag){
      this.renderer2.setAttribute(this.elementRef.nativeElement, "class", "sticky");
      this.renderer2.setAttribute(this.logo, "class", "logo-sticky");
      this.renderer2.setAttribute(this.btnMobile, "class", "btn-mobile-nav-sticky");
      const factoryContact = this.builder.build(this.fadeIn());
      factoryContact.create(this.elementRef.nativeElement).play();
      this.flag = false;
    }else if(window.pageYOffset < this.invisibleHeight){
      this.renderer2.setAttribute(this.elementRef.nativeElement, "class", "header");
      this.renderer2.setAttribute(this.logo, "class", "logo");
      this.renderer2.setAttribute(this.btnMobile, "class", "btn-mobile-nav");
      this.flag = true;
    }
  } 

  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 })),
    ];
  }

  private fadeOut(): AnimationMetadata[] {
    return [
      style({ opacity: '*' }),
      animate('400ms ease-in', style({ opacity: 0 })),
    ];
  }
}
