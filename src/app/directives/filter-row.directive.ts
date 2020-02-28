import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFilterRow]'
})
export class FilterRowDirective {

  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }
  ngOnInit(): void {
    const currentElement = this.elmRef.nativeElement;
    this.renderer.addClass(currentElement, "filter-field");
  }

}
