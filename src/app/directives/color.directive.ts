import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input() appColor = '';

  regex = /a-z/

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.appColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  constructor(private el: ElementRef) {
    console.log(el);
  }

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
