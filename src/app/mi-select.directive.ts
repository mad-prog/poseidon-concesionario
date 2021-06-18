import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiSelect]'
})
export class MiSelectDirective implements OnInit {

  @Input() appMiSelect: string[] = [];
  @Input() placeHolder: string = 'Select an option...';
  @Output() selectionChange = new EventEmitter<string>();

  open: boolean = false;
  paragraph?: HTMLParagraphElement;
  icon?: HTMLElement;
  valueSelected: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.createAndAppendParagraph();
    this.createAndAppendIcon();
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
        this.selectValue(option);
        this.closeSelect(div);       
        event.stopPropagation();
      });

      this.renderer.appendChild(ul, li);
    });

    //this.openSelect(div);

    this.renderer.appendChild(div, ul);
    this.renderer.appendChild(this.el.nativeElement, div);
  }

  private selectValue(value: string): void {
    this.valueSelected = value;
    this.renderer.setProperty(this.paragraph, 'textContent', value);
    this.toogleIcon();
    this.selectionChange.emit(value);
  }

  private resetControl(): void {
    this.valueSelected = '';  
    this.renderer.setProperty(this.paragraph, 'textContent', this.placeHolder);
    this.toogleIcon();
    this.selectionChange.emit('');
  }

  private toogleIcon() {
    if (this.valueSelected) {
      this.renderer.removeClass(this.icon, 'fa-sort-down');
      this.renderer.addClass(this.icon, 'fa-times');
    } else {
      this.renderer.removeClass(this.icon, 'fa-times');
      this.renderer.addClass(this.icon, 'fa-sort-down');
    }
  }

  private createAndAppendIcon() {
    this.icon = this.renderer.createElement('i');
    if (this.icon) {
      this.renderer.addClass(this.icon, 'fas');
      this.renderer.addClass(this.icon, 'fa-sort-down');

      this.renderer.listen(this.icon, 'click', (event: Event) => {
        if (this.icon?.classList.contains('fa-times')) {
          this.resetControl();
          event.stopPropagation();
        }
      });

      this.renderer.appendChild(this.el.nativeElement, this.icon);
    }
  }

  private createAndAppendParagraph() {
    this.paragraph = this.renderer.createElement('p');
    this.renderer.setProperty(this.paragraph, 'textContent', this.placeHolder);
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }
}





