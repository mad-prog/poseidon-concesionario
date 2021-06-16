import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit, OnChanges {

  @Input() appHighLight: string | undefined;
  @Input() color: string | undefined;
  @Input() fontSize?: number;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // (element.nativeElement as HTMLElement).style.backgroundColor = 'yellow';
    // element.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fontSize){
      this.renderer.setStyle(this.element.nativeElement, 'font-size', changes.fontSize.currentValue + 'px');
    }
    if (changes.color){
      this.renderer.setStyle(this.element.nativeElement, 'color', changes.color.currentValue);
    }
  }

  ngOnInit(): void {
    // if (this.fontSize) {
    //   this.renderer.setStyle(this.element.nativeElement, 'font-size', this.fontSize + 'px');
    // }
    // this.renderer.setStyle(this.element.nativeElement, 'color', this.color || 'black');
  }

  @HostListener('mouseenter')
  mouseEnter() {
    //this.element.nativeElement.style.backgroundColor = this.appHighLight || 'yellow';
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.appHighLight || 'yellow');
  }

  @HostListener('mouseleave')
  mouseLeave() {
    //this.element.nativeElement.style.backgroundColor = null;
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '');
  }

}
