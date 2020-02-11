import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SelectRowDirective } from './directives/select-row.directive';
import { SetSizeDirective } from './directives/set-size.directive';
import { appFixTableHeaderDirective } from './directives/fix-table-header.directive';
import { FixTableColumnDirective } from './directives/fix-table-column.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SelectRowDirective,
    SetSizeDirective,
    appFixTableHeaderDirective,
    FixTableColumnDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
