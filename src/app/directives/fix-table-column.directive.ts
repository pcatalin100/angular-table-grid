import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFixTableColumn]'
})
export class FixTableColumnDirective {
  @Input('appFixTableColumn') col: any;
  @Input('appFixTableColumnSide') side: any;
  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let currentElement = this.elmRef.nativeElement;
    if(this.col.fixedSide === "left"){
      this.renderer.addClass(currentElement, "fix-left");
      this.renderer.setStyle(currentElement, "left", this.col.position)
    } else if (this.col.fixedSide === "right"){
      this.renderer.addClass(currentElement, "fix-right");
      this.renderer.setStyle(currentElement, "right", this.col.position)
    }

  }
}
