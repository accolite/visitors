import { Component, Input, SimpleChanges, ContentChildren, QueryList } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ArrayUtil } from 'src/app/helpers/array.util';
import { DataTableColumnComponent } from './data-table-column/data-table-column.component';



/**
 * @title Table with filtering
 */
@Component( {
  selector: 'data-table',
  styleUrls: [ 'data-table.component.css' ],
  templateUrl: 'data-table.component.html',
} )
export class DataTableComponent {

  @Input()
  dataSource: MatTableDataSource<any>;

  @ContentChildren( DataTableColumnComponent )
  dataTableColumns: QueryList<DataTableColumnComponent>;

  displayedColumns: string[] = [];

  showTable: boolean = false;

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes.dataSource ) {
      this.dataSource = new MatTableDataSource( changes.dataSource.currentValue );
      this.getDisplayedColumns();
    }
  }

  getDisplayedColumns() {
    this.displayedColumns = Object.keys( ArrayUtil.first( this.dataSource.data ) );
  }

  applyFilter( filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterContentInit() {
    this.showTable = true;
  }
}