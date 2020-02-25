import { Component, ViewChild } from '@angular/core';
import { IHeader, IContent } from './interfaces/table';
import { GetDataService } from './get-data.service';
import { TableComponent } from './table/table.component';
import { FilterTableClass } from './table-functions';
import { SetColumnsClass } from './table-functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //@ViewChild(TableComponent, { static: false }) child: TableComponent;
  dropDownItems = [];
  filterBy = [];
  filters: any = {};
  isActive: boolean = true;
  title = 'table-project';
  headerContent: IHeader[];
  content: IContent[] = [];
  contentBackup: IContent[];
  defaultOption = "selectedDefaultOption";
  selectedItems = "Filter by name";
  fixedColumns = [
    {
      key: "country",
      side: "right"
    },
    {
      key: "type",
      side: "right"
    },
    {
      key: "color",
      side: "left"
    },
    {
      key: "name",
      side: "left"
    },
  ]
  constructor(private getData: GetDataService) {
  }
  ngOnInit(): void {
    this.getData.getHeaderContent().subscribe((res: IHeader[]) => {
      this.headerContent = res;
      this.filterArray();
      this.headerContent.forEach(element => {
        if (element.key === "name") {
          this.filters[element.key] = [];
        } else {
          this.filters[element.key] = "";
        }
      });
    });
    this.getData.getTableContent().subscribe((res: IContent[]) => {
      this.content = res;
      this.contentBackup = this.content;
      this.getDropDownItem();
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
  filterArray() {
    let leftColumns = [];
    let rightColumns = [];
    this.fixedColumns.forEach(element => {
      this.headerContent.forEach((item) => {
        if (item.key === element.key && element.side === "left") {
          this.headerContent.splice(this.headerContent.indexOf(item), 1)
          leftColumns.push(item);
        } else if (item.key === element.key && element.side === "right") {
          this.headerContent.splice(this.headerContent.indexOf(item), 1)
          rightColumns.push(item);
        }
      });
    });
    this.setPosition(leftColumns);
    this.setPosition(rightColumns);
  }

  setPosition(columns) {
    for (let i = columns.length - 1; i >= 0; i--) {
      if (i === columns.length - 1) {
        columns[i].position = 0;
      } else {
        columns[i].position = columns[i + 1].position + columns[i + 1].width + "px";
      }
    }
    this.headerContent = SetColumnsClass.addToArray(columns, this.fixedColumns, this.headerContent);
  }
  getFilters(e, key) {
    let value = e.target.value;
    this.filters[key] = value;
    this.getFilteredTableContent();
  }
  getFilteredTableContent() {
    this.content = this.contentBackup;
    this.content = FilterTableClass.filterTable(this.content, this.filters);
    if (this.filters['name'].length > 2) {
      this.selectedItems = `${this.filters['name'].length} selected items`
    }
    else if (this.filters["name"].length > 0) {
      this.selectedItems = this.filters['name'].toString();
    } else {
      this.selectedItems = "Filter by name";
    }
  }
  getDropDownItem() {
    let arr = this.content.map(item => {
      return item.name
    });
    this.dropDownItems = arr.filter((item, i) => {
      if (arr.indexOf(item) === i) {
        return item;
      }
    }).map(item => { return { key: item, isSelected: false } });
  }
  addSelectedValues(option) {
    if (!option.isSelected) {
      this.filters.name.push(option.key);
    } else if (option.isSelected) {
      this.filters.name = this.filters.name.filter(item => item !== option.key);
    }
    option.isSelected = !option.isSelected;
    this.getFilteredTableContent();
  }
}