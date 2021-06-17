import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCocheDisponibleStatus]'
})
export class CocheDisponibleStatusDirective implements OnChanges {

  @Input() noDisponible?: boolean;
  @Output() vender = new EventEmitter();

  icon?: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.icon) {
      this.createIcon();
    }

    if (this.icon && changes.noDisponible) {
      this.renderer.removeClass(this.icon, 'fa-lock');
      this.renderer.removeClass(this.icon, 'fa-lock-open');
      const css = changes.noDisponible.currentValue ? 'fa-lock' : 'fa-lock-open';
      this.renderer.addClass(this.icon, css);
      this.renderer.appendChild(this.el.nativeElement, this.icon);      
    }
  }

  private createIcon(): void {
    this.icon = this.renderer.createElement('i');
    if (this.icon) {
      this.renderer.addClass(this.icon, 'fas');

      this.renderer.listen(this.icon, 'click', () => {
       this.vender.emit();
      });
    }
  }
}
