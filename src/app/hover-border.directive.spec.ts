import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]'
})
export class HoverBorderDirective {
  @Input() appHoverBorder = '#000';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(`2px solid ${this.appHoverBorder}`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('none');
  }

  private setBorder(border: string): void {
    this.el.nativeElement.style.border = border;
  }
}
