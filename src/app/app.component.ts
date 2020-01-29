import { Component, ViewChild, Directive, HostListener, Input } from '@angular/core';
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
  isActive: boolean = true;
  title = 'table-project';
  headerContent: IHeader[];
  content: IContent[];
  fixLeft = {
    key: "name",
    side: "left"
  };
  fixRight = {
    key: "country",
    side: "right"
  }
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
    this.content = this.content.filter((row) => {
      return row.isSelected === false;
    });
  }
  showDetails() {
    this.isActive = !this.isActive;
  }
}

