import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IContent } from '../interfaces/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {
  @Input() tableHeader;
  @Input() tableContent;
  @Input() content: IContent[];
  constructor() { }

  ngOnInit() { }
}