import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverSpan]'
})
export class HoverSpanDirective {

  span?: HTMLSpanElement;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  elRatonEntra(): void {
    this.span = this.renderer.createElement('span');

    if (this.span) {
      this.span.textContent = 'Este SPAN se ha creado al hacer hover sobre el elemento';
      this.renderer.appendChild(this.el.nativeElement, this.span);
    }
  }

  @HostListener('mouseleave')
  elRatonSale(): void {
    if (this.span) {
      this.renderer.removeChild(this.el.nativeElement, this.span);
    }
  }

}
