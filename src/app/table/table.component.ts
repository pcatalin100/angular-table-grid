import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
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
  constructor() { }

  ngOnInit() { }
}