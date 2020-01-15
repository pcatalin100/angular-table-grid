import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  content: any[] = []
  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getHeaderContent().subscribe({
      next: data => {
        console.log(data);
      }
    })
    this.getData.getTableContent().subscribe((res: any) => {
      this.content = res;
      console.log(this.content);
    })
  }

}
