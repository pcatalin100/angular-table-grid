import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() headerContent;
  @Input() content;
  @Input() isActive;
  constructor() { }

  ngOnInit() {
    
  }

  rowClicked(row: any) {
    if (row.isSelected === false) {
      row.isSelected = true;
    } else {
      row.isSelected = false;
    }
  }
}