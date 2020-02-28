import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFixTableColumn]'
})
export class FixTableColumnDirective {
  @Input('appFixTableColumn') column: any;
  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }
  ngOnInit(): void {
    const currentElement = this.elmRef.nativeElement;
    if(this.column.fixedSide === "left"){
      this.renderer.addClass(currentElement, "fix-left");
      this.renderer.setStyle(currentElement, "left", this.column.position)
    } else if (this.column.fixedSide === "right"){
      this.renderer.addClass(currentElement, "fix-right");
      this.renderer.setStyle(currentElement, "right", this.column.position)
    }

  }
}
