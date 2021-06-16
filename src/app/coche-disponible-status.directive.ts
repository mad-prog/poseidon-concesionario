import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCocheDisponibleStatus]'
})
export class CocheDisponibleStatusDirective implements OnChanges {

  @Input() noDisponible?: boolean;

  icon?: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.icon) {
      this.createIcon();
    }

    if (this.icon && changes.noDisponible) {
      const css = changes.noDisponible.currentValue ? 'fa-lock' : 'fa-lock-open';
      this.renderer.addClass(this.icon, css);
      this.renderer.appendChild(this.el.nativeElement, this.icon);      
    }
  }

  private createIcon(): void {
    this.icon = this.renderer.createElement('i');
    if (this.icon) {
      this.renderer.addClass(this.icon, 'fas');
    }
  }
}
