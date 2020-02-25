import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFixTableColumn]'
})
export class FixTableColumnDirective {
  @Input('appFixTableColumn') column: any;
  //@Input('fixedSide') side: any;
  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
