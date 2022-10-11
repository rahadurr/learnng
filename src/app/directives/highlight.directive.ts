import {Directive, HostBinding} from '@angular/core';
import {NgModel} from "@angular/forms";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class.invalid-input') get invalid() { return this.control.invalid; }
  @HostBinding('class.valid') get valid() { return this.control.valid }

  constructor(private control: NgModel) { }

}
