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
  constructor() { }

  ngOnInit() {
    console.log('headeer',this.tableHeader)
  }
  /* onRowClick(row: any) {
    row.isSelected = !row.isSelected
  } */
  
}