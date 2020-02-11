import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetSize]'
})
export class SetSizeDirective {

  constructor(
    private renderer: Renderer2, 
    private elmRef: ElementRef
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     
  }

}
