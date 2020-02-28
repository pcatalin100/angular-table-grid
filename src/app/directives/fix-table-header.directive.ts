import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFixTableHeader]'
})
export class appFixTableHeaderDirective {
  @Input('appFixTableHeader') col: any;
  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }
  ngOnInit(): void {
    let currentElement = this.elmRef.nativeElement;
    this.renderer.setStyle(currentElement, "width", this.col.width + "px")
    if(this.col.fixedSide === "left"){
      this.renderer.addClass(currentElement, "fix-left");
      this.renderer.setStyle(currentElement, "left", this.col.position)
    } else if (this.col.fixedSide === "right"){
      this.renderer.addClass(currentElement, "fix-right");
      this.renderer.setStyle(currentElement, "right", this.col.position)
    }
  }
}
