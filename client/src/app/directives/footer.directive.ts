import { animate, AnimationBuilder, AnimationMetadata, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFooter]'
})
export class FooterDirective {

  constructor(private elementRef: ElementRef,
    private renderer2: Renderer2,
    private builder: AnimationBuilder) { 
      
  }

  flag = true;
  flag2 = true;

  get contact(){
    return document.getElementById("changeFooter");
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){

    if(window.pageYOffset >= document.body.scrollHeight - 1000 && this.flag){
      console.log("test in")
      this.renderer2.setAttribute(this.contact, "class", "footer")

      const factoryContact = this.builder.build(this.contactIn());
      factoryContact.create(this.contact).play();

      const factoryFooter = this.builder.build(this.footerIn());
      factoryFooter.create(this.elementRef.nativeElement).play();

      this.elementRef.nativeElement.scrollIntoView({behavior: 'smooth'});
      this.flag = false;
      this.flag2 = true;

    }else if(window.pageYOffset < document.body.scrollHeight - 1000 && this.flag2){
      console.log("test out")
      this.renderer2.setAttribute(this.contact, "class", "contact")

      const factoryContact = this.builder.build(this.contactOut());
      factoryContact.create(this.contact).play();

      const factoryFooter = this.builder.build(this.footerOut());
      factoryFooter.create(this.elementRef.nativeElement).play();
      this.flag = true;
      this.flag2 = false;
    }

  } 

  private footerIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('800ms ease-in', style({ opacity: 1 })),
    ];
  }

  private footerOut(): AnimationMetadata[] {
    return [
      style({ opacity: '*' }),
      animate('800ms ease-in', style({ opacity: 0 })),
    ];
  }

  private contactIn(): AnimationMetadata[] {
    return [
      style({ width: "100%"}),
      animate('800ms ease-in', style({ width: "95%", backgroundColor: 'var(--main-bk-color-dark-1)' })),
    ];
  }

  private contactOut(): AnimationMetadata[] {
    return [
      style({ width: '*' }),
      animate('1200ms ease-in', style({ width: "100%", backgroundColor: 'var(--main-bk-color)' })),
    ];
  }
}
