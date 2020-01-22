import { Component, ViewChild } from '@angular/core';
import { IHeader, IContent } from './interfaces/table';
import { GetDataService } from './get-data.service';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(TableComponent, { static: false }) child: TableComponent;
  isActive: boolean = false;
  title = 'table-project';
  headerContent: IHeader[];
  content: IContent[];
  constructor(private getData: GetDataService) {

  }
  ngOnInit(): void {
    this.getData.getHeaderContent().subscribe((res: IHeader[]) => {
      this.headerContent = res;
    });
    this.getData.getTableContent().subscribe((res: IContent[]) => {
      this.content = res;
    });

  }
  removeRows() {
    this.content = this.content.filter( (row) => {
      return row.isSelected === false;
    });
  }

  showDetails(){
    if(this.isActive === true){
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
