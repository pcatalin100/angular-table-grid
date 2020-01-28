import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectRow]'
})
export class SelectRowDirective {
  @Input('appSelectRow') row: any
  @HostListener('click', ['$event']) onClick(event){
    this.row.isSelected = !this.row.isSelected;
  }
}
