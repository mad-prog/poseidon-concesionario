import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiSelect]'
})
export class MiSelectDirective implements OnInit {

  @Input() appMiSelect: string[] = [];

  open: boolean = false;
  paragraph?: HTMLParagraphElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.paragraph = this.renderer.createElement('p');
    this.renderer.setProperty(this.paragraph, 'textContent', this.appMiSelect[0]);
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('click')
  onClick(): void {

    const select = this.el.nativeElement.querySelector('.select-container');

    if (!select) {
      this.createSelect();
    } else {
      if (this.open) {
        this.closeSelect(select);
      } else {
        this.openSelect(select);
      }
    }
  }

  private openSelect(selectContainer: HTMLDivElement): void {
    this.renderer.setStyle(selectContainer, 'display', 'block');
    this.open = true;
  }

  private closeSelect(selectContainer: HTMLDivElement): void {
    this.renderer.setStyle(selectContainer, 'display', 'none');
    this.open = false;
  }

  private createSelect(): void {

    const div: HTMLDivElement = this.renderer.createElement('div');
    this.renderer.addClass(div, 'select-container');

    const ul: HTMLUListElement = this.renderer.createElement('ul');

    this.appMiSelect.forEach(option => {

      const li: HTMLLIElement = this.renderer.createElement('li');
      li.textContent = option;

      this.renderer.listen(li, 'click', (event: Event) => {
        this.renderer.setProperty(this.paragraph, 'textContent', option);
        this.closeSelect(div);
        event.stopPropagation();
      });
      this.renderer.appendChild(ul, li);
    });

    this.renderer.appendChild(div, ul);
    this.renderer.appendChild(this.el.nativeElement, div);
  }
}





