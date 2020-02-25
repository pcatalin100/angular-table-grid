import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SelectRowDirective } from './directives/select-row.directive';
import { appFixTableHeaderDirective } from './directives/fix-table-header.directive';
import { FixTableColumnDirective } from './directives/fix-table-column.directive';
import { FilterRowDirective } from './directives/filter-row.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SelectRowDirective,
    appFixTableHeaderDirective,
    FixTableColumnDirective,
    FilterRowDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
