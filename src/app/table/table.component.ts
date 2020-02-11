import { Component, OnInit, Input, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {
  @Input() tableHeader;
  @Input() tableContent;
  @Input() content;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit() {
   }
}